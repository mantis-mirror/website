import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { environment } from '../../environments/environment';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private initialized = false;
  private readonly measurementId = environment.gaMeasurementId;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly router: Router,
  ) {}

  initialize(): void {
    if (!isPlatformBrowser(this.platformId) || !this.measurementId || this.initialized) {
      return;
    }

    this.installGtag();
    this.trackPageViews();
    this.trackOutboundLinks();
    this.initialized = true;
  }

  private installGtag(): void {
    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    this.document.head.appendChild(script);

    const inlineScript = this.document.createElement('script');
    inlineScript.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}  
      gtag('js', new Date());
      gtag('config', '${this.measurementId}', { anonymize_ip: true, send_page_view: false });
    `;
    this.document.head.appendChild(inlineScript);
  }

  private trackPageViews(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.sendPageView(event.urlAfterRedirects);
      });
  }

  private sendPageView(path: string): void {
    if (typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: this.document.title,
      page_location: this.document.location.href,
    });
  }

  private trackOutboundLinks(): void {
    this.document.addEventListener(
      'click',
      (event: Event) => {
        const target = event.target as Element | null;
        const anchor = target?.closest('a');

        if (!anchor?.href) {
          return;
        }

        const destination = new URL(anchor.href, this.document.location.href);
        const currentOrigin = this.document.location.origin;

        if (destination.origin === currentOrigin) {
          return;
        }

        this.sendOutboundClick(destination.href);
      },
      true,
    );
  }

  private sendOutboundClick(destination: string): void {
    if (typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: destination,
      link_url: destination,
      transport_type: 'beacon',
    });
  }
}

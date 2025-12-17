import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  private readonly eventTargets: Array<Window | Document> = [];

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    this.eventTargets.push(window, document);
    this.clearScrollInterceptors();
  }

  ngOnDestroy(): void {
    this.clearScrollInterceptors();
  }

  onBrockTestimonialClick(): void {
    this.clearScrollInterceptors();
  }

  private clearScrollInterceptors(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    window.onwheel = null;
    document.onwheel = null;
    window.ontouchmove = null;
    document.ontouchmove = null;

    this.detachNamedHandlers(['disableScroll', 'preventScroll', 'lockScroll', 'trapScroll']);
  }

  private detachNamedHandlers(handlerNames: string[]): void {
    const events: Array<keyof DocumentEventMap> = ['wheel', 'touchmove'];

    this.eventTargets.forEach((target) => {
      events.forEach((eventName) => {
        handlerNames.forEach((name) => {
          const handler = (target as any)[name] ?? (window as any)[name];

          if (typeof handler === 'function') {
            target.removeEventListener(eventName, handler as EventListener);
          }
        });
      });
    });
  }
}

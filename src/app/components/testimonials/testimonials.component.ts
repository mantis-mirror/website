import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, AfterViewInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  private removeModalListeners: Array<() => void> = [];
  private bodyOverflowBeforeModal = '';
  private htmlOverflowBeforeModal = '';

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const modals = Array.from(document.querySelectorAll('.modal')) as HTMLElement[];

    modals.forEach((modalElement) => {
      const handleShow = () => {
        this.bodyOverflowBeforeModal = document.body.style.overflow;
        this.htmlOverflowBeforeModal = document.documentElement.style.overflow;
      };

      const handleHidden = () => this.restoreScrollState();

      modalElement.addEventListener('show.bs.modal', handleShow);
      modalElement.addEventListener('hidden.bs.modal', handleHidden);

      this.removeModalListeners.push(() => {
        modalElement.removeEventListener('show.bs.modal', handleShow);
        modalElement.removeEventListener('hidden.bs.modal', handleHidden);
      });
    });
  }

  ngOnDestroy(): void {
    this.removeModalListeners.forEach((removeListener) => removeListener());
    this.restoreScrollState();
  }

  private restoreScrollState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    document.body.style.overflow = this.bodyOverflowBeforeModal;
    document.documentElement.style.overflow = this.htmlOverflowBeforeModal;
    document.body.classList.remove('modal-open');

    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach((backdrop) => backdrop.remove());
  }
}

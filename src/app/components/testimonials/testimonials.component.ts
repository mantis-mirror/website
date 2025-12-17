import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  private modalElement: HTMLElement | null = null;
  private readonly handleModalOpen = () => {
    const scrollY = window.scrollY;
    document.body.classList.add('modal-open');
    document.body.style.top = `-${scrollY}px`;
  };

  private readonly handleModalClose = () => {
    const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  };

  ngAfterViewInit(): void {
    this.modalElement = document.getElementById('brockTestimonialModal');

    if (!this.modalElement) {
      return;
    }

    this.modalElement.addEventListener('show.bs.modal', this.handleModalOpen);
    this.modalElement.addEventListener('hidden.bs.modal', this.handleModalClose);
  }

  ngOnDestroy(): void {
    if (this.modalElement) {
      this.modalElement.removeEventListener('show.bs.modal', this.handleModalOpen);
      this.modalElement.removeEventListener('hidden.bs.modal', this.handleModalClose);
    }

    this.handleModalClose();
  }
}

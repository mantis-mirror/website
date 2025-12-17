import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @ViewChild('brockModal') brockModal?: ElementRef<HTMLDivElement>;

  openBrockModal(): void {
    if (!this.brockModal) {
      return;
    }

    const modalInstance = Modal.getOrCreateInstance(this.brockModal.nativeElement);
    modalInstance.show();
  }
}

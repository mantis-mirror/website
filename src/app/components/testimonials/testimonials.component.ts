import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @ViewChild('brockDialog') brockDialogTemplate?: TemplateRef<unknown>;

  constructor(private readonly dialog: MatDialog) {}

  openBrockModal(): void {
    const brockDialogTemplate = this.brockDialogTemplate;

    if (!brockDialogTemplate) {
      return;
    }

    this.dialog.open(brockDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }
}

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
  @ViewChild('leeDialog') leeDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('domDialog') domDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('brockDialog') brockDialogTemplate?: TemplateRef<unknown>;

  constructor(private readonly dialog: MatDialog) {}

  openLeeModal(): void {
    const leeDialogTemplate = this.leeDialogTemplate;

    if (!leeDialogTemplate) {
      return;
    }

    this.dialog.open(leeDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openDomModal(): void {
    const domDialogTemplate = this.domDialogTemplate;

    if (!domDialogTemplate) {
      return;
    }

    this.dialog.open(domDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

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

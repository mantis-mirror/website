import { Component, inject } from '@angular/core';
import { NgIf } from "@angular/common";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { HelmetFitDialogComponent } from "../helmet-fit-dialog/helmet-fit-dialog.component";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgIf,
    MatDialogModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  imageVisible = false;

  private readonly dialog = inject(MatDialog);

  openHelmetFitDialog(event: Event): void {
    event.preventDefault();
    this.dialog.open(HelmetFitDialogComponent, {
      maxWidth: '640px',
      width: '100%',
      panelClass: 'helmet-fit-dialog'
    });
  }
}

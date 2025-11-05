import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

interface HelmetFitImage {
  readonly alt: string;
  readonly caption: string;
  readonly src: string;
}

@Component({
  selector: 'app-helmet-fit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule
  ],
  templateUrl: './helmet-fit-dialog.component.html',
  styleUrl: './helmet-fit-dialog.component.scss'
})
export class HelmetFitDialogComponent {
}

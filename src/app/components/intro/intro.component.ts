import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { APP_NAME } from "../../constants";
import { HelmetFitDialogComponent } from "../helmet-fit-dialog/helmet-fit-dialog.component";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  private readonly dialog = inject(MatDialog);

  protected readonly APP_NAME = APP_NAME;

  openHelmetFitDialog(): void {
    this.dialog.open(HelmetFitDialogComponent, {
      maxWidth: '640px',
      width: '100%',
      panelClass: 'helmet-fit-dialog'
    });
  }
}

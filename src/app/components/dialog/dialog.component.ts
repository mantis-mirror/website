import {Component, inject, signal} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatLabel,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    MatInput,
    MatButton,
    MatDialogClose,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly animal = new FormControl('')
  test123 = '';

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.animal.value);
  }
}

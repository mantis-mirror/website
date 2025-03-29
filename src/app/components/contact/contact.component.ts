import {AfterViewInit, Component, inject} from '@angular/core';
import { EMAIL, PHONE_NUMBER } from "../../constants";
import {AuthService} from "../../state/auth.service";
import {CommonModule} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatButton
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  not = inject(AuthService).i;
  protected readonly PHONE_NUMBER = PHONE_NUMBER;
  protected readonly EMAIL = EMAIL;

  hello() {
    this.openIt()
  }

  a = inject(AuthService).i;
  private dialog = inject(MatDialog);

  ngAfterViewInit() {
    this.openIt()
  }

  openIt() {
    if (! this.a()) {
      const dialogRef = this.dialog.open(DialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (typeof result === 'string' && result.toLowerCase() === 'mm2024') {
          this.a.set(true);
        }
      });
    }

  }
}

import { Component } from '@angular/core';
import { APP_NAME, EMAIL, PHONE_NUMBER } from "../../constants";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  protected readonly PHONE_NUMBER = PHONE_NUMBER;
  protected readonly EMAIL = EMAIL;
    protected readonly APP_NAME = APP_NAME;
}

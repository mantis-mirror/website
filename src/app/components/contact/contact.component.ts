import { Component } from '@angular/core';
import { EMAIL, PHONE_NUMBER } from "../../constants";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  protected readonly PHONE_NUMBER = PHONE_NUMBER;
  protected readonly EMAIL = EMAIL;
}

import { Component } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  imageVisible = false;
}

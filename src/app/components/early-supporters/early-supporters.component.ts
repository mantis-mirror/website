import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-early-supporters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './early-supporters.component.html',
  styleUrl: './early-supporters.component.scss'
})
export class EarlySupportersComponent {
  isExpanded = false;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}

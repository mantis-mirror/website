import { afterRender, Component } from '@angular/core';

@Component({
  selector: 'app-the-solution',
  standalone: true,
  imports: [],
  templateUrl: './the-solution.component.html',
  styleUrl: './the-solution.component.scss'
})
export class TheSolutionComponent {
  constructor() {
    afterRender(() => {
      // Focus the first input element in this component.
      (window as any).GLightbox({
        'selector': 'glightbox-dm'
      });
    });
  }
}

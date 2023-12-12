import { afterRender, Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor() {
    afterRender(() => {
      // Focus the first input element in this component.
      (window as any).GLightbox({
        'selector': 'glightbox-dm'
      });
    });
  }
}

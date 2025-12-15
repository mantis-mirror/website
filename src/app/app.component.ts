import { afterRender, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { IntroComponent } from "./components/intro/intro.component";
import { TheProblemComponent } from "./components/the-problem/the-problem.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FaqComponent } from "./components/faq/faq.component";
import { TheSolutionComponent } from "./components/the-solution/the-solution.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BackToTopComponent } from "./components/back-to-top/back-to-top.component";
import { AnalyticsService } from "./services/analytics.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, NavbarComponent, IntroComponent, TheProblemComponent, TestimonialsComponent, FaqComponent, TheSolutionComponent, ContactComponent, FooterComponent, BackToTopComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-bootstrap-starter';

  constructor(analyticsService: AnalyticsService) {
    afterRender(() => {
      (window as any).GLightbox({});
    });

    analyticsService.initialize();
  }
}

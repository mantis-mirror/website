import {Component, inject} from '@angular/core';
import {BackToTopComponent} from "../back-to-top/back-to-top.component";
import {ContactComponent} from "../contact/contact.component";
import {FaqComponent} from "../faq/faq.component";
import {FooterComponent} from "../footer/footer.component";
import {IntroComponent} from "../intro/intro.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {TestimonialsComponent} from "../testimonials/testimonials.component";
import {TheProblemComponent} from "../the-problem/the-problem.component";
import {TheSolutionComponent} from "../the-solution/the-solution.component";
import {AuthService} from "../../state/auth.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BackToTopComponent,
    ContactComponent,
    FaqComponent,
    FooterComponent,
    IntroComponent,
    NavbarComponent,
    TestimonialsComponent,
    TheProblemComponent,
    TheSolutionComponent
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  a = inject(AuthService).i;
}

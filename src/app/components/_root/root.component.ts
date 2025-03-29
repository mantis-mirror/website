import {AfterViewInit, Component, inject} from '@angular/core';
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
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

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
export class RootComponent implements AfterViewInit {
  a = inject(AuthService).i;
  private dialog = inject(MatDialog);

  ngAfterViewInit() {
    // const dialogRef = this.dialog.open(DialogComponent);
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   if (typeof result === 'string' && result.toLowerCase() === 'mm2024') {
    //     this.a.set(true);
    //   }
    // });
  }
}

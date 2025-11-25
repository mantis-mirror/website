import { Component } from '@angular/core';
import { Collapse } from 'bootstrap';
import { PHONE_NUMBER } from "../../constants";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected readonly PHONE_NUMBER = PHONE_NUMBER;

  onNavItemClick(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const isMobile = window.innerWidth < 992;
    if (!isMobile) {
      return;
    }

    const navbarCollapse = document.getElementById('navbarNav');
    if (!navbarCollapse) {
      return;
    }

    const collapseInstance = Collapse.getInstance(navbarCollapse) ?? new Collapse(navbarCollapse, { toggle: false });
    collapseInstance.hide();
  }
}

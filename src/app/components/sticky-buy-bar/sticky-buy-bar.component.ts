import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky-buy-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sticky-buy-bar.component.html',
  styleUrl: './sticky-buy-bar.component.scss'
})
export class StickyBuyBarComponent {
  private readonly revealOffset = 280;
  private readonly hideOffset = 120;
  private lastScrollTop = 0;

  protected isVisible = false;

  @HostBinding('class.sticky-buy-bar-container')
  protected hostClass = true;

  @HostBinding('class.is-visible')
  protected get visibleClass(): boolean {
    return this.isVisible;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const currentScroll = window.scrollY || window.pageYOffset;

    if (currentScroll <= this.hideOffset) {
      this.isVisible = false;
    } else if (currentScroll > this.revealOffset && currentScroll >= this.lastScrollTop) {
      this.isVisible = true;
    } else if (currentScroll < this.lastScrollTop && currentScroll <= this.revealOffset) {
      this.isVisible = false;
    }

    this.lastScrollTop = currentScroll;
  }
}

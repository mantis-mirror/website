import { AfterViewInit, Component, OnDestroy, inject } from '@angular/core';
import { NgIf } from "@angular/common";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { HelmetFitDialogComponent } from "../helmet-fit-dialog/helmet-fit-dialog.component";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgIf,
    MatDialogModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements AfterViewInit, OnDestroy {
  imageVisible = false;

  private readonly dialog = inject(MatDialog);
  private readonly collapseCleanup: Array<() => void> = [];

  ngAfterViewInit(): void {
    const panels = Array.from(
      document.querySelectorAll<HTMLElement>('#accordionExample .accordion-collapse')
    );

    panels.forEach(panel => {
      const updateHeight = () =>
        panel.style.setProperty('--faq-panel-height', `${panel.scrollHeight}px`);

      const setExpandedHeight = () => {
        updateHeight();
        panel.style.maxHeight = panel.style.getPropertyValue('--faq-panel-height');
      };

      const collapsePanel = () => {
        updateHeight();
        requestAnimationFrame(() => {
          panel.style.maxHeight = '0px';
        });
      };

      const showHandler = () => setExpandedHeight();
      const shownHandler = () => setExpandedHeight();
      const hideHandler = () => collapsePanel();
      const hiddenHandler = () => (panel.style.maxHeight = '0px');

      const resizeObserver = new ResizeObserver(() => {
        if (panel.classList.contains('show')) {
          setExpandedHeight();
        }
      });

      panel.addEventListener('show.bs.collapse', showHandler);
      panel.addEventListener('shown.bs.collapse', shownHandler);
      panel.addEventListener('hide.bs.collapse', hideHandler);
      panel.addEventListener('hidden.bs.collapse', hiddenHandler);
      resizeObserver.observe(panel);

      if (panel.classList.contains('show')) {
        setExpandedHeight();
      } else {
        panel.style.maxHeight = '0px';
      }

      this.collapseCleanup.push(() => {
        panel.removeEventListener('show.bs.collapse', showHandler);
        panel.removeEventListener('shown.bs.collapse', shownHandler);
        panel.removeEventListener('hide.bs.collapse', hideHandler);
        panel.removeEventListener('hidden.bs.collapse', hiddenHandler);
        resizeObserver.disconnect();
      });
    });
  }

  ngOnDestroy(): void {
    this.collapseCleanup.forEach(cleanup => cleanup());
  }

  openHelmetFitDialog(event: Event): void {
    event.preventDefault();
    this.dialog.open(HelmetFitDialogComponent, {
      maxWidth: '640px',
      width: '100%',
      panelClass: 'helmet-fit-dialog'
    });
  }
}

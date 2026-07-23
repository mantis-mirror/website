import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @ViewChild('helenDialog') helenDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('leeDialog') leeDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('domDialog') domDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('brockDialog') brockDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('chrisDialog') chrisDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('lisanneDialog') lisanneDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('jerryDialog') jerryDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('chantalDialog') chantalDialogTemplate?: TemplateRef<unknown>;
  @ViewChild('reneDialog') reneDialogTemplate?: TemplateRef<unknown>;

  constructor(private readonly dialog: MatDialog) {}

  openHelenModal(): void {
    const helenDialogTemplate = this.helenDialogTemplate;

    if (!helenDialogTemplate) {
      return;
    }

    this.dialog.open(helenDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openLeeModal(): void {
    const leeDialogTemplate = this.leeDialogTemplate;

    if (!leeDialogTemplate) {
      return;
    }

    this.dialog.open(leeDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openDomModal(): void {
    const domDialogTemplate = this.domDialogTemplate;

    if (!domDialogTemplate) {
      return;
    }

    this.dialog.open(domDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openBrockModal(): void {
    const brockDialogTemplate = this.brockDialogTemplate;

    if (!brockDialogTemplate) {
      return;
    }

    this.dialog.open(brockDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openChrisModal(): void {
    const chrisDialogTemplate = this.chrisDialogTemplate;

    if (!chrisDialogTemplate) {
      return;
    }

    this.dialog.open(chrisDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openLisanneModal(): void {
    const lisanneDialogTemplate = this.lisanneDialogTemplate;

    if (!lisanneDialogTemplate) {
      return;
    }

    this.dialog.open(lisanneDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openJerryModal(): void {
    const jerryDialogTemplate = this.jerryDialogTemplate;

    if (!jerryDialogTemplate) {
      return;
    }

    this.dialog.open(jerryDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openChantalModal(): void {
    const chantalDialogTemplate = this.chantalDialogTemplate;

    if (!chantalDialogTemplate) {
      return;
    }

    this.dialog.open(chantalDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

  openReneModal(): void {
    const reneDialogTemplate = this.reneDialogTemplate;

    if (!reneDialogTemplate) {
      return;
    }

    this.dialog.open(reneDialogTemplate, {
      maxWidth: '900px',
      width: '90%',
      autoFocus: false
    });
  }

}

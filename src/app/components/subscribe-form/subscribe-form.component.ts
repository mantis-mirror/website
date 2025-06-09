import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SubscriberConfirmationComponent} from "./components/subscriber-confirmation/subscriber-confirmation.component";

@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.scss'
})
export class SubscribeFormComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  readonly route = inject(ActivatedRoute);

  openDialog() {
    this.dialog.open(SubscriberConfirmationComponent);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if ('subscriberConfirmation' in params) {
        this.openDialog();
      }
    });
  }
}

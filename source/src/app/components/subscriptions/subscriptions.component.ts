import { Component, OnInit, NgZone } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent {

    @BlockUI('secure-shell') loading: NgBlockUI;

}

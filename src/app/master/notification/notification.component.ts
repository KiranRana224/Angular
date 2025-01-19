import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}
  ngOnInit(): void {
    // Request push notification permission
    // this.notificationService.requestPermission();

    // // Listen for incoming messages
    // this.notificationService.receiveMessage();
  }
}

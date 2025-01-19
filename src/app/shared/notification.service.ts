import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // currentMessage = new BehaviorSubject<any>(null);

  // constructor(private angularFireMessaging: AngularFireMessaging) {}

  // // Request permission to receive notifications
  // requestPermission() {
  //   this.angularFireMessaging.requestToken.subscribe(
  //     (token: string) => {
  //       console.log('FCM Token:', token);
  //       // Store the token or send it to the server
  //       localStorage.setItem('fcmToken', token);
  //     },
  //     (err: any) => {
  //       console.error('Permission Denied', err);
  //     }
  //   );
  // }

  // // Receive push notifications
  // receiveMessage() {
  //   this.angularFireMessaging.messages.subscribe((payload: any) => {
  //     console.log('Message received:', payload);
  //     this.currentMessage.next(payload);
  //   });
  // }}
}
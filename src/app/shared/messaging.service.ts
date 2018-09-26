/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This will take care of messages we will be receiving.
  This will also take care of the unique id (tokes) which is generate by browser. 
  This token is stored to stored in Firebase using updateToken().
  getPermission() will ask user to permit to receive message in browser. 
*/
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  /*
    Sendhil : 25 Sept 2018 : Demo Task management code
    update token in firebase database
    
    @param userId userId as a key 
    @param token token as a value
  */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token
        this.angularFireDB.object('fcmTokens/').update(data)
      })
  }

  /*
    Sendhil : 25 Sept 2018 : Demo Task management code
    request permission for notification from firebase cloud messaging
    @param userId userId
  */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        this.updateToken(userId, token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /*
    Sendhil : 25 Sept 2018 : Demo Task management code
    hook method when new notification received in foreground
  */
  receiveMessage() {
    console.log('receiveMessage');
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);

        setTimeout( () => {
          this.currentMessage = new BehaviorSubject(null);
        }, 10000);
      })
  }
}
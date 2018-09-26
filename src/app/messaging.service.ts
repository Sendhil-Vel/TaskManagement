/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This will take care of messages we will be receiving.
  This will also take care of the unique id (tokes) which is generate by browser. 
  This token is stored to stored in Firebase using updateToken().
  getPermission() will ask user to permit to receive message in browser. 
*/
import { Injectable }          from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase from 'firebase';

import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class MessagingService {

  messaging = firebase.messaging()
  currentMessage = new BehaviorSubject(null)

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  /*
    Sendhil : 25 Sept 2018 : Demo Task management code
    update token in firebase database
    
    @param userId userId as a key 
    @param token token as a value
  */
  updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      if (!user) return;

      const data = { [user.uid]: token }
      this.db.object('fcmTokens/').update(data)
    })
  }
    
  /*
    Sendhil : 25 Sept 2018 : Demo Task management code
    request permission for notification from firebase cloud messaging
    @param userId userId
  */
  getPermission() {
      this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken()
      })
      .then(token => {
        console.log(token)
        this.updateToken(token)
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }

    /*
      Sendhil : 25 Sept 2018 : Demo Task management code
      hook method when new notification received in foreground
    */
    receiveMessage() {
       this.messaging.onMessage((payload) => {
        console.log("Message received. ", payload);
        this.currentMessage.next(payload)
      });

    }
}
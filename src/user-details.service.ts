import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  private firestore: Firestore = inject(Firestore);

  users: any[] = [];



  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

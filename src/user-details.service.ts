import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore, getDoc, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private firestore: Firestore) { }


  users: any[] = [];

  async getUserData(docId: string): Promise<DocumentData | undefined> {
    const userDocRef = doc(this.firestore, `users/${docId}`);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      return userDocSnap.data();
    } else {
      console.log('No such document!');
      return undefined;
    }
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

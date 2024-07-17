import { Component, inject, Injectable, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, onSnapshot, doc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule,
     MatCardModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnDestroy {
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  users: any[] = [];
  private unsubscribeSnapshot: any;

  private firestore: Firestore = inject(Firestore);

  constructor(private dialog: MatDialog) {
    this.unsubscribeSnapshot = onSnapshot(this.getUsersRef(), (snapshot) => {
      this.users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(this.users); 
    });
  }

  ngOnDestroy() {
    this.unsubscribeSnapshot();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}

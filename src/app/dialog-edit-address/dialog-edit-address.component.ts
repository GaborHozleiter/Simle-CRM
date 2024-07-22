import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatDialogContent, MatDialogActions, MatDialogClose,
    MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent implements OnInit{
  [x: string]: any;

  user!: User;
  loading = false;
  userId : string = '';
  birthDate = Date;

  private firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>){

  }

  ngOnInit(): void {
      
  }

  cencel(): void {
    this.dialogRef.close();
  }

  async saveUser() {
    if (!this.userId) {
      console.error('User ID is missing');
      return;
    }

    
    this.loading = true;

    try {
      const userDocRef = doc(this.firestore, `users/${this.userId}`);
      await updateDoc(userDocRef, { ...this.user });
      this.loading = false;
      this.dialogRef.close();
    } catch (error) {
      console.error('Error updating user: ', error);
      this.loading = false; 
    }
  }

}

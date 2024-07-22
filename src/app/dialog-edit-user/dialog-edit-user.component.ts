import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatInputModule, MatFormFieldModule, FormsModule, 
    MatDatepickerModule, CommonModule, MatProgressBarModule, MatButtonModule],
    providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent implements OnInit{

  user!: User;
  userId : string = '';
  loading = false;
  birthDate = Date;

  private firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>){

  }
  ngOnInit(): void {
    
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
      console.log('User successfully updated!');
      this.loading = false;
      this.dialogRef.close();
    } catch (error) {
      console.error('Error updating user: ', error);
      this.loading = false; 
    }
  }


  cencel(): void {
    this.dialogRef.close();
  }
}

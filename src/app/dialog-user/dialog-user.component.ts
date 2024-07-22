import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-user',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatInputModule, MatFormFieldModule, FormsModule, 
    MatDatepickerModule, CommonModule, MatProgressBarModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss'],
})
export class DialogUserComponent {
  user = new User();
  birthDate: any;
  loading = false;

  private firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>) { }

  cencel(): void {
    this.dialogRef.close();
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    try {
      const usersCollection = collection(this.firestore, 'users');
      await addDoc(usersCollection, { ...this.user });
      this.loading = false;
      this.dialogRef.close();
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }
}

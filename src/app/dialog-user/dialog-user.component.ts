import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Component({
  selector: 'app-dialog-user',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatInputModule, MatFormFieldModule, FormsModule, MatDatepickerModule, CommonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss'],
})
export class DialogUserComponent {
  user = new User();
  birthDate: any;
  private firestore: Firestore = inject(Firestore);

  cencel(): void {
  
  }

  async saveUser() {
    console.log(this.user);
    this.user.birthDate = this.birthDate.getTime();

    try {
      const usersCollection = collection(this.firestore, 'users');
      await addDoc(usersCollection, { ...this.user });
      console.log('User successfully added!');
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }
}

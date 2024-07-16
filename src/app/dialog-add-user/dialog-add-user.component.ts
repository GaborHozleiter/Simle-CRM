import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, doc } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogClose, 
    MatDialogActions, 
    MatDialogContent, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user = new User();
  birthDate!: Date;
  loading = false;
  private firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>){

  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
  
  cencel() {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.addUser(this.user);
    //this.loading = true;
      this.dialogRef.close();
    
  }

  async addUser(item: User) {
    const userObj = {
      firstName: item.firstName,
      lastName: item.lastName,
      birthDate: item.birthDate,
      street: item.street,
      zipCode: item.zipCode,
      city: item.city
    };
    
    await addDoc(this.getUsersRef(), userObj).catch(
      (err) => { console.error(err); }
    ).then(
      (docRef) => { 
        if (docRef) {
          console.log('User Id : ', docRef.id);
          this.loading = false;
          alert(this.loading);
        }
      }
    );
  };
}

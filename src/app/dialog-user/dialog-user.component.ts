import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, NgModel} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-user',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatInputModule, MatFormFieldModule, FormsModule,
    MatDatepickerModule, CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-user.component.html',
  styleUrl: './dialog-user.component.scss',
})
export class DialogUserComponent {

  user = new User();
  birthDate : any;

  cencel() : void {
    
  }

  saveUser() {
    console.log(this.user);
    this.user.birthDate = this.birthDate.getTime();
  }
}

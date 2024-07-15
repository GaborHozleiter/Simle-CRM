import { Component, ChangeDetectionStrategy} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogClose, MatDialogActions, MatDialogContent, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    FormsModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user = new User();
  birthDate!: Date;
  
  onNoClick(){

  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
        console.log(this.user);
  }

}

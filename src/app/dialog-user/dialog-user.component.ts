import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-dialog-user',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatInputModule, MatFormFieldModule, FormsModule,
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-user.component.html',
  styleUrl: './dialog-user.component.scss',
})
export class DialogUserComponent {

  cencel() : void {
    
  }

  AddUser() {}
}

import { Component } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatDialogModule
} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogClose, MatDialogActions, MatDialogContent],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  onNoClick(){

  }

  animal(){

  }

}

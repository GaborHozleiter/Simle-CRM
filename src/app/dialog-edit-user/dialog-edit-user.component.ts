import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

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
  loading = false;
  birthDate = Date;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>){

  }
  ngOnInit(): void {
      
  }

  saveUser(){

  }

  cencel(){

  }
}

import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);

  ngOnInit(): void {
      
  }

  constructor(private dialog : MatDialog){

  }

  openDialog(){
    this.dialog.open(DialogUserComponent);
  }
}

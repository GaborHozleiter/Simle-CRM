import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { MatCardModule } from '@angular/material/card';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,MatTooltipModule, MatDialogModule, MatCardModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  allUsers: any;

  private firestore: Firestore = inject(Firestore);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    const users$: Observable<any[]> = collectionData(usersCollection);
    users$.subscribe((data: any[]) => {
      this.allUsers = data;
      console.log(this.allUsers); 
    });
  }

  openDialog() {
    this.dialog.open(DialogUserComponent);
  }
}

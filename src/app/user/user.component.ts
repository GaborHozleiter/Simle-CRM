import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { MatCardModule } from '@angular/material/card';
import { collection, Firestore, CollectionReference, DocumentData, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { collectionChanges } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  allUsers: any[] = [];

  private firestore: Firestore = inject(Firestore);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    const usersCollection: CollectionReference<DocumentData> = collection(this.firestore, 'users');
    const users$: Observable<any[]> = collectionChanges(usersCollection).pipe(
      map(actions => actions.map(a => {
        const data = a.doc.data();
        const id = a.doc.id;
        return { id, ...data };
      }))
    );

    users$.subscribe((data: any[]) => {
      this.allUsers = data;
    });
  }

  openDialog() {
    this.dialog.open(DialogUserComponent);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  user: User = new User();
  private firestore: Firestore = inject(Firestore);

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      this.getUser();
    });
  }

  getUser() {
    const id = this.userId;
    this.getUserById(id);
  }

  getUserById(id: string): void {
    const userDoc = doc(this.firestore, `users/${id}`);
    const userDoc$: Observable<any> = docData(userDoc);

    userDoc$.subscribe(data => {
      this.user = new User({ id, ...data });   
      console.log(this.user); 
    });
  }

  openAdressDialog(){
    
  }
}

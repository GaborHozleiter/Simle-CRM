import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, onSnapshot, doc } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../user-details.service';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{

  userData: any;

  constructor(private route: ActivatedRoute, private userDetailsService: UserDetailsService) {}

  async ngOnInit() {
    const docId = this.route.snapshot.paramMap.get('id'); // Annahme: die URL enthält die ID als Parameter

    if (docId) {
      this.userData = await this.userDetailsService.getUserData(docId);
      console.log(this.userData); // Dies zeigt die Daten in der Konsole an
      //this.userData = new User;
    } else {
      console.log('No ID found in URL');
    }
  }

  openDialog(){
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthData, Login } from '../../auth/auth.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authPrv:AuthService) { }

  userProfile!:AuthData;
  ngOnInit(): void {
    this.userProfile = this.authPrv.getData()
  }
}

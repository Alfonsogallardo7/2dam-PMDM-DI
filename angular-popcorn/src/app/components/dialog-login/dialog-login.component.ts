import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit { 

  constructor(
    private router:Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.getRequestToken().subscribe(resp => {
    this.authService.setLocalRequestToken(resp.request_token);
    window.open(`https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:4200/loginsuccess`,"_self");
  
    });
  }

}

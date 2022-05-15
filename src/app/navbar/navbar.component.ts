import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedInUser?: firebase.default.User | null;
  @Input() variable?: string;
  @Output() save = new EventEmitter();

  onSave(asd: string) {
    this.save.emit(asd);
  }

  constructor(public authService: AuthService, 
              public router: Router ) { }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      console.log(this.loggedInUser);
    }, error => {
      console.error(error);
    })
  }


  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    });

  //  this.authService.logout().then(() => {
   //   console.log('Logged out successfully');
  //    this.router.navigate(['']);
  //  }).catch(error => {
  //    console.error(error);
  //  })

  }
}

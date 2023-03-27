import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
  public error: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.username === 'Ricardo Jorge' && this.password === '123') {
      this.router.navigate(['/tabs']);
      this.error = false;
    } else {
      this.error = true;
    }
  }
}

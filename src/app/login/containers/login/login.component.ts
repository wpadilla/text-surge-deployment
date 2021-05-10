import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
// import { AuthFacade } from 'src/app/store/auth/auth-facade.service';

@Component({
  selector: 'ts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  
  public loading$: Observable<boolean> = new Observable<boolean>();

  // constructor(private authFacade: AuthFacade, private router: Router) { }

  constructor(private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(false)
    })
  }

  ngOnInit(): void {
    // this.loading$ = this.authFacade.getLoading();
  }

  public submitForm(): void {
    console.log('submit');
    this.router.navigate(['/login/two-factor-auth']);
    
    // this.authFacade.logIn(this.loginForm.email, this.loginForm.password);
  }

  public goToResetPassword(): void {
    this.router.navigate(['/login/forgot-password']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthFacade } from 'src/app/store/auth/auth-facade.service';

@Component({
  selector: 'ts-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public resetPasswordForm = {
    email: ''
  }

  public loading$: Observable<boolean> = new Observable<boolean>();

  // constructor(private authFacade: AuthFacade, private router: Router) { }

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.loading$ = this.authFacade.getLoading();
  }

  public submitForm(): void {
      console.log('submit');
    // this.authFacade.resetPassword(this.resetPasswordForm.email);
  }

  public goBack(): void {
    this.router.navigate(['/login'])
  }
}
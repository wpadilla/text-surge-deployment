import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// import { AuthFacade } from 'src/app/store/auth/auth-facade.service';

@Component({
  selector: 'ts-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    public form: FormGroup;

  public loading$: Observable<boolean> = new Observable<boolean>();

  // constructor(private authFacade: AuthFacade, private router: Router) { }

  constructor(private router: Router) {
      this.form = new FormGroup({
          email: new FormControl('', [Validators.required, Validators.email])
      })
  }

  ngOnInit(): void {
    // this.loading$ = this.authFacade.getLoading();
  }

  public submitForm(): void {
      console.log('submit');
      this.router.navigate(['/login']);
      
    // this.authFacade.resetPassword(this.resetPasswordForm.email);
  }

  public goBack(): void {
    this.router.navigate(['/login'])
  }
}

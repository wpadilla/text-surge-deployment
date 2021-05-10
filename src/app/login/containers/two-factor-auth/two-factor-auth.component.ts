import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// import { AuthFacade } from 'src/app/store/auth/auth-facade.service';

@Component({
  selector: 'ts-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.scss']
})
export class TwoFactorAuthComponent implements OnInit {
    public form: FormGroup;

  public loading$: Observable<boolean> = new Observable<boolean>();

  // constructor(private authFacade: AuthFacade, private router: Router) { }

  constructor(private router: Router) {
      this.form = new FormGroup({
          passcode: new FormControl('', [Validators.required])
      });
  }

  ngOnInit(): void {
    // this.loading$ = this.authFacade.getLoading();
  }

  public submitForm(): void {
      console.log('submit');
      this.router.navigate(['/main/dashboard']);
      
    // this.authFacade.resetPassword(this.resetPasswordForm.email);
  }

  public sendPasscode(): void {
      console.log('send passcode');
  }

  public goBack(): void {
    this.router.navigate(['/login'])
  }
}

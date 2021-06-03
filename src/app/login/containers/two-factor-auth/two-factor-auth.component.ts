import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'ts-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.scss']
})
export class TwoFactorAuthComponent implements OnInit {
    public form: FormGroup = new FormGroup({});

  public loading$: Observable<boolean> = new Observable<boolean>();


  constructor(private router: Router) {
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
    this.router.navigate(['/login']);
  }
}

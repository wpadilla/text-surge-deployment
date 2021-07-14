import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  fadeAnimation,
  fadeListAnimation,
  horizontalSlideAnimation,
  verticalSlideAnimation
} from '../../../shared/animations';
import { usersMock } from '../../../../utils/mock';
import { routePathNames } from '../../../../utils/routes.utils';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ts-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  animations: [
    fadeListAnimation,
    fadeAnimation,
    verticalSlideAnimation,
    horizontalSlideAnimation,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingComponent implements AfterViewInit {

  user = usersMock[0];
  form = new FormGroup({phone: new FormControl('')});

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    this.form.setValue({
      ...this.form.value,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      phone: this.user.phone,
      email: this.user.email,
    });
  }

  viewProfile(): void {
    this.router.navigate([routePathNames.main.user.profile.path, this.user.id]);
  }

  submitForm(): void {
    console.log(this.form);
  }
}

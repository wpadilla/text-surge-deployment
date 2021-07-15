import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
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
import { passwordRequirementPatternUtil } from '../../../../utils';
import { getBlobFromFile } from '../../../../utils/files.utils';
import { DOCUMENT } from '@angular/common';

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

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  user = usersMock[0];
  form = new FormGroup({phone: new FormControl('')});
  passwordRequirementsPattern = passwordRequirementPatternUtil;
  @ViewChild('avatarContainer') avatarContainer: { nativeElement: HTMLDivElement } = {} as any;

  get password(): string {
    return this.form.controls.password.value;
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

  /* loadImg, load img in order to show it as avatar img
  * @param event: this event has the file selected
  * @return void
  * */
  loadImg(event: any): void {
    const file = event.target.files[0];
    const img = this.avatarContainer.nativeElement.querySelector('img');
    if (img) {
      img.src = getBlobFromFile(file);
    }
  }
}

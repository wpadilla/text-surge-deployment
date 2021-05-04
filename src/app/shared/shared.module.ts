import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { TextBoxComponent } from './components/text-box/text-box.component';

@NgModule({
  declarations: [
      ButtonComponent,
      TextBoxComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    TextBoxComponent
  ],
})
export class SharedModule {}

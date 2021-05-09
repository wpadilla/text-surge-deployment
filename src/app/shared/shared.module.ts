import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { UnaryMetricBoxComponent } from './components/unary-metric-box/unary-metric-box.component';
import { Unary } from '@angular/compiler';

@NgModule({
  declarations: [
      ButtonComponent,
      ProgressBarComponent,
      TextBoxComponent,
      UnaryMetricBoxComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    ProgressBarComponent,
    TextBoxComponent,
    UnaryMetricBoxComponent
  ],
})
export class SharedModule {}

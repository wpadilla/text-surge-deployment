import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ButtonLabelComponent } from './components/button-label/button-label.component';
import { CampaignPanelComponent } from './components/campaign-panel/campaign-panel.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { UnaryMetricBoxComponent } from './components/unary-metric-box/unary-metric-box.component';
import { ListFiltersComponent } from './components/list-filters/list-filters.component';

@NgModule({
  declarations: [
      ButtonComponent,
      ButtonLabelComponent,
      CampaignPanelComponent,
      ProgressBarComponent,
      TextBoxComponent,
      UnaryMetricBoxComponent,
      ListFiltersComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    ButtonLabelComponent,
    CampaignPanelComponent,
    ProgressBarComponent,
    TextBoxComponent,
    UnaryMetricBoxComponent,
    ListFiltersComponent,
  ],
})
export class SharedModule {}

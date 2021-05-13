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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UniqueValuesArrayElementsPipe } from './pipes/unique-values-array-elements.pipe';
import { CalcPercentPipe } from './pipes/calc-percent.pipe';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { IconComponent } from './components/icon/icon.component';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonLabelComponent,
    CampaignPanelComponent,
    ProgressBarComponent,
    TextBoxComponent,
    UnaryMetricBoxComponent,
    ListFiltersComponent,
    UniqueValuesArrayElementsPipe,
    CalcPercentPipe,
    IconComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    IconSpriteModule,
    DropdownModule,
    ButtonModule,
  ],
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
    IconComponent,
    DropdownComponent,
  ],
})
export class SharedModule {}

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
import { UniqueValuesArrayElementsPipe } from './pipes/unique-values-array-elements.pipe';
import { CalcPercentPipe } from './pipes/calc-percent.pipe';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { IconComponent } from './components/icon/icon.component';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { GenerateAndErrorHandlingReactiveForm } from './directives/generate-and-error-handling-reactive-form.directive';
import { ListComponent } from './components/list/list.component';
import { ConcatValuesPipe } from './pipes/concat-values.pipe';
import CampaignFacade from '../core/services/campaign/campaign.facade';
import { ColumnTextItemComponent } from './components/column-text-item/column-text-item.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { ChartModule } from 'primeng/chart';
import { DonutChartComponent } from './components/charts/donut-chart/donut-chart.component';
import { ColumnInFilterComponent } from './components/column-in-filter/column-in-filter.component';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { ViewerSidebarComponent } from './components/viewer-sidebar/viewer-sidebar.component';
import { TreeModule } from 'primeng/tree';
import { FindPipe } from "./pipes/find.pipe";

@NgModule({
  providers: [
    CampaignFacade,
  ],
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
    ConcatValuesPipe,
    IconComponent,
    DropdownComponent,
    GenerateAndErrorHandlingReactiveForm,
    ListComponent,
    ColumnTextItemComponent,
    ClickOutsideDirective,
    LineChartComponent,
    DonutChartComponent,
    ColumnInFilterComponent,
    ViewerSidebarComponent,
    FindPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconSpriteModule,
    DropdownModule,
    ButtonModule,
    StepsModule,
    InputTextModule,
    DialogModule,
    CheckboxModule,
    MenubarModule,
    ChartModule,
    TableModule,
    ListboxModule,
    TreeModule,
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
    GenerateAndErrorHandlingReactiveForm,
    ListComponent,
    ConcatValuesPipe,
    ColumnTextItemComponent,
    ClickOutsideDirective,
    LineChartComponent,
    DonutChartComponent,
    ColumnInFilterComponent,
    UniqueValuesArrayElementsPipe,
    ViewerSidebarComponent,
    TreeModule,
    FindPipe,
    ListboxModule,
  ],
})
export class SharedModule {}

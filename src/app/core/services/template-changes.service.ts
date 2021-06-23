import { Injectable } from '@angular/core';

export interface ITemplateChanges {
  disableViewerMessagingContentPadding?: boolean;
  activeViewerMode?: boolean;
}

@Injectable()
export default class TemplateChangesService {
  constructor() {
  }
  private _templateChanges: ITemplateChanges = {} as any;

  get templateChanges(): ITemplateChanges {
    return this._templateChanges;
  }

  set templateChanges(value: Partial<ITemplateChanges>) {
    // just will reassign the template changes if the new value has some differences with the old one
    if (!JSON.stringify(this.templateChanges).includes(JSON.stringify(value))) {
      this._templateChanges = {...this.templateChanges, ...value};
    }
  }
  /*changeTemplate, do the change in the template changes properties structure avoiding the "Expression has changed..." error
  * @param templateChanges: all changes to be applies to the template properties structure
  * */
  changeTemplate(templateChanges: Partial<ITemplateChanges>): void {
    setTimeout(() => this.templateChanges = templateChanges, 100);
  }
}

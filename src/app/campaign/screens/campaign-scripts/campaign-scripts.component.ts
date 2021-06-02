import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IClient from '../../../core/interfaces/client.interface';
import { globalSearch, urlRegex } from '../../../../utils';
import { ICampaign } from '../../../core/interfaces';
import { getCaretPosition, pasteHtmlAtCaret } from '../../../../utils/DOM.utils';

@Component({
  selector: 'app-campaign-scripts-form',
  templateUrl: './campaign-scripts.component.html',
  styleUrls: ['./campaign-scripts.component.scss'],
})
export class CampaignScriptsComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,
  ) {
  }

  public form: FormGroup = new FormGroup({});

  get scripts(): FormArray {
    return this.form.get('scripts') as FormArray;
  }

  get responses(): FormArray {
    return this.form.get('responses') as FormArray;
  }
  showErrorMessage?: boolean;
  isDraft?: boolean;
  isEmojiVisible: boolean[] = [];
  isResponseEmojiVisible: boolean[] = [];
  isLinkDialogVisible?: boolean;
  isTestMessageDialogVisible?: boolean;
  addLinkElement: HTMLElement = {} as any;
  urlPattern = urlRegex;
  scriptsRanges: { [N in string]: Range } = {};
  scriptSelections: { [N in string]: Selection } = {};
  injectablePropertiesInScript = [
    'firstName',
    'lastName',
    'texterFirstName',
    'texterLastName',
    'cell',
    'zip',
  ];


  ngOnInit(): void {
    this.form = new FormGroup({
      scripts: new FormArray([]),
      responses: new FormArray([]),
      link: new FormControl(''),
      linkName: new FormControl(),
      allowReplies: new FormControl(true),
      sendAutoReplyUnsubscribe: new FormControl(true),
      unsubscribeMessage: new FormControl('You have unsubscribed from all future messages about Justin Case for Governor 2021'),
      testPhone: new FormControl(''),
      testScript: new FormControl(''),
    });
    this.cdr.detectChanges();
    this.addNewScript();
  }

  ngAfterViewInit(): void {
  }

  submitForm(): void {
    this.loadAllScripts();
    this.loadAllResponses();
    this.showErrorMessage = !this.validate();
    console.log(this.form.value, this.form);
    if (this.showErrorMessage) {
      this.router.navigate(['main/campaign/view/1']);
    }
  }

  getCaretPositionInContentEditable(element: HTMLElement): void {
    const {selection, range} = getCaretPosition(element);

    // store them in the corresponding object
    this.scriptSelections = {
      [element.id]: selection,
    };

    this.scriptsRanges = {
      [element.id]: range,
    };
  }

  get validLink(): boolean {
    return this.form.controls.link.valid;
  }

  pasteHtmlAtScriptEditable(html: string, element: HTMLElement, isEmoji?: boolean): void {
    const {id} = element;

    if (!this.scriptsRanges[id] || !this.scriptSelections[id]) {
      this.getCaretPositionInContentEditable(element);
    }
    // adding space when inserting new html value only if it's not emoji
    html = isEmoji ? html : `${html} &nbsp;`;
    pasteHtmlAtCaret(html, this.scriptsRanges[id], this.scriptSelections[id]);
    this.getCaretPositionInContentEditable(element);
  }

  addEmoji(event: any, element: HTMLDivElement): void {
    this.pasteHtmlAtScriptEditable(event.emoji.native, element, true);
  }

  loadAllScripts(): void {
    const scripts = Array.from(document.querySelectorAll('.script-editable'))
      .map((item, i) => ({
        script: item.innerHTML,
        description: (this.scripts.controls[i] as any).controls.description.value,
      }));
    this.scripts.setValue(scripts);
  }

  loadAllResponses(): void {
    const responses = Array.from(document.querySelectorAll('.response-editable'))
      .map((item, i) => ({
        reply: item.innerHTML,
        recipient: this.responses.controls[i] ? (this.responses.controls[i] as any).controls.recipient.value : '',
      }));
    this.responses.setValue(responses);
  }

  addLink(): void {
    if (!this.validLink) {
      return;
    }
    const link = `<b><a href="${this.form.controls.link.value}">${this.form.controls.linkName.value || this.form.controls.link.value}</a></b>`;
    this.pasteHtmlAtScriptEditable(link, this.addLinkElement);
    this.isLinkDialogVisible = false;
    this.form.controls.link.setValue('');
    this.form.controls.linkName.setValue('');
  }

  showAddLink(element: HTMLElement): void {
    this.isLinkDialogVisible = true;
    this.addLinkElement = element;
  }

  injectPropertyInContentEditable(property: string, script: HTMLElement): void {
    this.pasteHtmlAtScriptEditable(`{${property}}`, script);
  }

  addNewScript(): void {
    const newGroup = new FormGroup({
      description: new FormControl(''),
      script: new FormControl(''),
    });
    this.scripts.push(newGroup);
  }

  removeScript(i: number): void {
    this.scripts.removeAt(i);
    delete this.scriptsRanges[`script-${i}`];
  }

  addNewResponse(): void {
    const newGroup = new FormGroup({
      recipient: new FormControl(''),
      reply: new FormControl(''),
    });
    this.responses.push(newGroup);
  }

  removeResponse(i: number): void {
    this.responses.removeAt(i);
    delete this.scriptsRanges[`response-${i}`];
  }

  onChangeAllowReplies(data: any): void {
    console.log(data, 'data');
    if (!data.checked) {
      Object.keys(this.scriptsRanges).forEach(key => {
        if (key.includes('response')) {
          delete this.scriptsRanges[key];
        }
      });
    }
  }

  validate(): boolean {
    return (
      this.scripts.controls[0].valid &&
      this.form.valid
    );
  }

  sendTestMessage(): void {

  }

  hideEmoji(i: number): void {
    this.isEmojiVisible[i] = false;
  }
}



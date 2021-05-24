import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import IClient from '../../../../../core/interfaces/client.interface';
import { globalSearch, urlRegex } from '../../../../../../utils';
import { ICampaign } from '../../../../../core/interfaces';
import { getCaretPosition, pasteHtmlAtCaret } from '../../../../../../utils/DOM.utils';

@Component({
  selector: 'app-campaign-scripts-form',
  templateUrl: './campaign-scripts.component.html',
  styleUrls: ['./campaign-scripts.component.scss']
})
export class CampaignScriptsComponent implements OnInit {

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,
  ) {
  }

  public form: FormGroup = new FormGroup({
    scripts: new FormArray(
      [
        new FormControl(''),
        new FormControl(''),
      ]),
    link: new FormControl('https://www.google.com'),
    linkName: new FormControl(),
  });

  get scripts(): FormArray {
    return this.form.get('scripts') as FormArray;
  }

  isDraft?: boolean;
  isEmojiVisible: boolean[] = [];
  isLinkDialogVisible?: boolean;
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
    this.cdr.detectChanges();
  }

  submitForm(): void {
    console.log(this.form.value);
  }

  getCaretPositionInScriptEditable(element: HTMLElement): void {
    const { selection, range } = getCaretPosition(element);

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
    const { id } = element;

    if (!this.scriptsRanges[id] || !this.scriptSelections[id]) { this.getCaretPositionInScriptEditable(element); }
    // adding space when inserting new html value only if it's not emoji
    html = isEmoji ? html : `${html} &nbsp;`;
    pasteHtmlAtCaret(html, this.scriptsRanges[id], this.scriptSelections[id]);
    this.getCaretPositionInScriptEditable(element);
  }

  addEmoji(event: any, element: HTMLDivElement, i: number): void {
    this.isEmojiVisible[i] = false;
    this.pasteHtmlAtScriptEditable(event.emoji.native, element, true);
  }

  loadAllScripts(): void {
    const scripts = Array.from(document.querySelectorAll('[contenteditable]')).map(item => item.innerHTML);
    console.log(scripts)
  }

  addLink(): void {
    if (!this.validLink) {
      return;
    }
    const link = `<a href="${this.form.controls.link.value}"> ${this.form.controls.linkName.value || this.form.controls.link.value}</a>`;
    this.pasteHtmlAtScriptEditable(link, this.addLinkElement);
    this.isLinkDialogVisible = false;
  }

  showAddLink(element: HTMLElement): void {
    this.isLinkDialogVisible = true;
    this.addLinkElement = element;
  }

  injectPropertyInScript(property: string, script: HTMLElement): void {
    this.pasteHtmlAtScriptEditable(`{${property}}`, script);
  }

}



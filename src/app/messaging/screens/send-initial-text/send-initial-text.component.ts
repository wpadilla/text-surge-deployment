import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { phoneNumbersMock } from '../../../../utils/mock';
import IPhoneNumber from '../../../core/interfaces/phone.interface';
import { fadeAnimation, popInAnimation } from '../../../shared/animations';
import { ILabelValue } from '../../../core/interfaces';

@Component({
  selector: 'ts-texter-dashboard',
  templateUrl: './send-initial-text.component.html',
  styleUrls: ['./send-initial-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeAnimation,
    popInAnimation,
  ]
})
export class SendInitialTextComponent implements OnInit {

  constructor() {
  }
  scripts: ILabelValue[] = [
    {
      label: 'Justin Case Script #1',
      value: `Hi {FirstName}, it's {TexterFirstName} from VA Dems!
        The 2021 election for Virginia's
        governor is just around the corner.
        Can we count on your vote for Justin Case?`,
    },
    {
      label: 'Justin Case Script #2',
      value: `Hi {FirstName}, it's {TexterFirstName} from VA Dems!
        Can we count on your vote for Justin Case?`,
    },
    {
      label: 'Justin Case Script #3',
      value: `I am {TexterFirstName} from VA Dems! I hope you be fine {FirstName},
        Can we count on your vote for Justin Case?`,
    }
  ];
  selectedScript: ILabelValue = {} as any;
  multipleContactSelectorEnable?: boolean;
  contacts = phoneNumbersMock;
  selectedContact: IPhoneNumber = {} as any;
  selectedContacts: IPhoneNumber[] = [];

  ngOnInit(): void {
    this.selectedContact = this.contacts[0];
    this.selectedScript = this.scripts[0];
  }

  onSelectScript(value: ILabelValue): void {
    this.selectedScript = value;
  }
}

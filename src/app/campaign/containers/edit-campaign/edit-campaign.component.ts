import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCampaignComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (location.pathname === `/main/campaign/edit`) {
      this.router.navigate([`main/campaign/edit/details/1`]);
    }
  }

}

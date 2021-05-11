import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
/*
import {
  Contract,
  Location,
  Member,
  Notification,
  Page,
  SimpleVendor,
  User,
  Vendor,
  VendorAccountRecord,
} from 'src/app/core/interfaces';
import { AuthFacade } from 'src/app/store/auth/auth-facade.service';
import { MainFacade } from 'src/app/store/main/main-facade.service';
*/

@Component({
  selector: 'ts-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
/*
  public user$: Observable<User>;
  public locations$: Observable<Location[]>;
  public vendors$: Observable<SimpleVendor[]>;
  public locationsLoading$: Observable<boolean>;
  public vendorsLoading$: Observable<boolean>;
  public showLocations: boolean;
  public showVendors: boolean;

  public notificationsOpen$: Observable<boolean>;
  public notifications$: Observable<Page<Notification>>;
  public notificationsLoading$: Observable<boolean>;
  public notificationsError$: Observable<string>;

  public editAccountOpen$: Observable<boolean>;
  public editAccountLoading$: Observable<boolean>;

  public editVendorAccountOpen$: Observable<boolean>;
  public editVendorAccountLoading$: Observable<boolean>;

  public editAddUserOpen$: Observable<boolean>;
  public editAddUserData$: Observable<Member>;
  public editAddUserLoading$: Observable<boolean>;
  public editAddUserLocations$: Observable<Location[]>;
  public editAddUserLocationsLoading$: Observable<boolean>;
  public editAddUserLocationsError$: Observable<string>;

  public addEditLocationOpen$: Observable<boolean>;
  public addEditLocationData$: Observable<Location>;
  public addEditLocationLoading$: Observable<boolean>;
  public addEditLocationPropertyManagers$: Observable<Member[]>;
  public addEditLocationPropertyManagersLoading$: Observable<boolean>;
  public addEditLocationPropertyManagersError$: Observable<string>;

  public addEditVendorOpen$: Observable<boolean>;
  public addEditVendorData$: Observable<Vendor | VendorAccountRecord>;
  public addEditVendorLoading$: Observable<boolean>;

  public addEditContractOpen$: Observable<boolean>;
  public addEditContractData$: Observable<Contract>;
  public addEditContractLoading$: Observable<boolean>;
  public addEditContractLocations$: Observable<Location[]>;
  public addEditContractLocationsLoading$: Observable<boolean>;
  public addEditContractLocationsError$: Observable<string>;
  public addEditContractVendors$: Observable<SimpleVendor[]>;
  public addEditContractVendorsLoading$: Observable<boolean>;
  public addEditContractVendorsError$: Observable<string>;
*/

  public displayNav: boolean = true;
  public displayNotifications: boolean = true;

  constructor(
    /*
    private mainFacade: MainFacade,
    private authFacade: AuthFacade,
    */
    public router: Router
  ) {}

  ngOnInit(): void {
    /*
    this.user$ = this.authFacade.getUser$();
    this.locations$ = this.mainFacade.getAllLocations();
    this.vendors$ = this.mainFacade.getAllVendors();

    this.locationsLoading$ = this.mainFacade.getLocationsLoading();
    this.vendorsLoading$ = this.mainFacade.getVendorsLoading();

    this.notificationsOpen$ = this.mainFacade.getNotificationsOpen();
    this.notifications$ = this.mainFacade.getNotifications();
    this.notificationsLoading$ = this.mainFacade.getNotificationsLoading();
    this.notificationsError$ = this.mainFacade.getNotificationsError();

    this.editAccountOpen$ = this.mainFacade.getEditAccountPanelOpen();
    this.editAccountLoading$ = this.mainFacade.getEditAccountPanelLoading();

    this.editVendorAccountOpen$ = this.mainFacade.getEditVendorAccountOpen();
    this.editVendorAccountLoading$ = this.mainFacade.getEditVendorAccountLoading();

    this.editAddUserOpen$ = this.mainFacade.getAddEditUserOpen();
    this.editAddUserData$ = this.mainFacade.getAddEditUserData();
    this.editAddUserLoading$ = this.mainFacade.getAddEditUserLoading();
    this.editAddUserLocations$ = this.mainFacade.getAddEditUserLocations();
    this.editAddUserLocationsLoading$ = this.mainFacade.getAddEditUserLocationsLoading();
    this.editAddUserLocationsError$ = this.mainFacade.getAddEditUserLocationsError();

    this.addEditLocationOpen$ = this.mainFacade.getAddEditLocationOpen();
    this.addEditLocationData$ = this.mainFacade.getAddEditLocationData();
    this.addEditLocationLoading$ = this.mainFacade.getAddEditLocationLoading();
    this.addEditLocationPropertyManagers$ = this.mainFacade.getAddEditLocationPropertyManagers();
    this.addEditLocationPropertyManagersLoading$ = this.mainFacade.getAddEditLocationPropertyManagersLoading();
    this.addEditLocationPropertyManagersError$ = this.mainFacade.getAddEditLocationPropertyManagersError();

    this.addEditVendorOpen$ = this.mainFacade.getAddEditVendorPanelOpen();
    this.addEditVendorData$ = this.mainFacade.getAddEditVendorPanelData();
    this.addEditVendorLoading$ = this.mainFacade.getAddEditVendorPanelLoading();

    this.addEditContractOpen$ = this.mainFacade.getAddEditContractOpen();
    this.addEditContractData$ = this.mainFacade.getAddEditContractData();
    this.addEditContractLoading$ = this.mainFacade.getAddEditContractLoading();
    this.addEditContractLocations$ = this.mainFacade.getAddEditContractLocations();
    this.addEditContractLocationsLoading$ = this.mainFacade.getAddEditContractLocationsLoading();
    this.addEditContractLocationsError$ = this.mainFacade.getAddEditContractLocationsError();
    this.addEditContractVendors$ = this.mainFacade.getAddEditContractVendors();
    this.addEditContractVendorsLoading$ = this.mainFacade.getAddEditContractVendorsLoading();
    this.addEditContractVendorsError$ = this.mainFacade.getAddEditContractVendorsError();

    this.mainFacade.loadLocations(1);
    this.mainFacade.loadVendors(1);
    this.mainFacade.loadNotifications(1, 1);

    if (this.router.isActive('/main/locations', false)) {
      this.hideShowLocations();
    } else if (this.router.isActive('/main/vendors', false)) {
      this.hideShowVendors();
    }
    */
  }

  hideShowLocations(): void {
    // if (!this.showLocations)
    //   this.mainFacade.loadAllLocations(1);

    // this.showLocations = !this.showLocations;
  }

  hideShowVendors(): void {
    // if (!this.showVendors)
    //   this.mainFacade.loadAllVendors(1);

    // this.showVendors = !this.showVendors;
  }

  changeNotificationsPanelOpen(open: boolean): void {
    // this.mainFacade.changeNotificationsPanelOpen(open);
  }

  viewNotification(notification: Notification): void {
    console.log(notification);
    
  }

  loadMoreNotifications(): void {
    console.log('loading more!');
  }

  loadNotificationsRetry(): void {

  }

  changeEditAccountPanelOpen(open: boolean): void {
    /*
    this.user$.pipes(
      take(1)
    ).subscribe((user) => {
      if (user.userType == 1 && user.employee.role == 5) {
        // Vendor Account
        this.mainFacade.changeEditVendorAccountOpen(open);
      } else {
        this.mainFacade.changeEditAccountPanelOpen(open);
      }
    });
    */
  }

  editAccountSave(form: any): void {
    /*
    this.mainFacade.updateAccount(
      form.firstName,
      form.lastName,
      form.email,
      form.oldPassword,
      form.newPassword
    );
    */
  }

  changeEditVendorAccountOpen(open: boolean): void {
    // this.mainFacade.changeEditVendorAccountOpen(open);
  }

  editVendorAccountSave(form: any): void {
    // console.log(form);
    
    // this.user$.pipes(
    //   take(1)
    // ).subscribe((user) => {
    //   this.mainFacade.updateVendorAccount(
    //     form.vendorName,
    //     form.hourlyRate,
    //     form.email,
    //     form.currentPassword,
    //     form.newPassword
    //   );
    // });
  }

  changeAddEditUserPanelOpen(open: boolean): void {
    // this.mainFacade.changeAddEditUserPanelOpen(open);
  }

  addEditUserSave(form: any): void {
    // Only include location ids if property manager
    /*
    let locationIDs;

    if (form.role == 1)
      locationIDs = form.locationIDs;

    if (form.memberID) {
      this.mainFacade.updateMember(form.memberID, form.email, form.firstName, form.lastName, form.role, locationIDs);
    } else {
      this.mainFacade.inviteMember(1, form.email, form.firstName, form.lastName, form.role, locationIDs);
    }
    */
  }

  changeAddEditLocationPanelOpen(open: boolean): void {
    // this.mainFacade.changeAddEditLocationPanelOpen(open);
  }

  addEditLocationSave(form: any): void {
    /*
    console.log(form);

    if (form.locationID) {
      // update
      this.mainFacade.updateLocation(
        form.locationID,
        form.name,
        form.sqft,
        form.memberIDs
      )
    } else {
      // add
      this.mainFacade.addLocation(
        1,
        form.name,
        form.sqft,
        form.memberIDs
      )
    }
    */
  }

  changeAddEditVendorPanelOpen(open: boolean): void {
    // this.mainFacade.changeAddEditVendorPanelOpen(open);
  }

  addEditVendorSave(form: any): void {
    /*
    if (form.vendorID) {
      this.mainFacade.updateVendor(
        form.vendorID,
        form.name,
        form.hourlyRate,
        form.managerEmail
      );
    } else {
      this.mainFacade.inviteVendor(
        1,
        form.name,
        form.managerEmail,
        form.hourlyRate
      );
    }
    */
  }

  resendVendorInvite(vendor: any): void {
    console.log(vendor);
  }

  openNewUserPanel(): void {}

  changeAddEditContractPanelOpen(open: boolean): void {
    // this.mainFacade.changeAddEditContractPaneOpen(open);
  }

  addEditContractSave(form: any): void {
    console.log(form);

    /*
    if (form.contractID) {
      this.mainFacade.updateContract(
        form.contractID,
        form.period,
        form.frequency,
        form.hourlyRate
      );
    } else {
      this.mainFacade.addContract(
        1,
        form.vendor.vendorID,
        form.location.locationID,
        form.period,
        form.frequency
      );
    }
    */
  }

  public logout(): void {
    // this.authFacade.topBarLogOut();

    this.router.navigate(['/login']);
  }

  public openNavigation(): void {
    this.displayNav = true;
  }
}

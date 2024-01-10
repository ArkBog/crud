import { Component } from '@angular/core';
import { CustomersDatabaseService } from 'src/app/services/customers-database.service';
import { DialogComponent } from '../customer-database/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChangeTabService } from 'src/app/services/change-tab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private customerDatabaseService: CustomersDatabaseService, public dialog: MatDialog, private changeTab: ChangeTabService){}

  customersQuantity(){
    let customers = this.customerDatabaseService.customersQuantity;
    return customers
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.customerDatabaseService.customerUpdating = false;
  }

  changeTabFn(){
    this.changeTab.cardIndex = 1;
    this.changeTab.newTabFunction()
  }

}

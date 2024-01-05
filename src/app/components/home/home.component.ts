import { Component } from '@angular/core';
import { CustomersDatabaseService } from 'src/app/services/customers-database.service';
import { DialogComponent } from '../customer-database/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private customerDatabaseService: CustomersDatabaseService, public dialog: MatDialog){}

  customersQuantity(){
    let customers = this.customerDatabaseService.customersDatabase.length;
    return customers
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.customerDatabaseService.customerUpdating = false;
  }

}

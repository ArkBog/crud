import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersDatabaseService } from 'src/app/services/customers-database.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-customer-database',
  templateUrl: './customer-database.component.html',
  styleUrls: ['./customer-database.component.scss']
})
export class CustomerDatabaseComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'adress', 'postal code', 'status', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  customers: any = [];

  constructor(private customersDatabaseService: CustomersDatabaseService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.customersDatabaseService.getCustomers().subscribe((data: any) => {
      this.customers = data;
      this.dataSource.data = this.customers;  // Assign data to the MatTableDataSource
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editCustomer(arg:any, i:any){
    console.log(arg, i)
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
  
// })

// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, public user: AddUserComponent) {}
// }

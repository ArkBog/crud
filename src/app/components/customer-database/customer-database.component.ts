import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersDatabaseService } from 'src/app/services/customers-database.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { DialogComponent } from './dialog/dialog.component';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-customer-database',
  templateUrl: './customer-database.component.html',
  styleUrls: ['./customer-database.component.scss']
})
export class CustomerDatabaseComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'adress', 'postal code', 'status', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  customers: any = [];
  private subscription: Subscription;

  constructor(private customersDatabaseService: CustomersDatabaseService, public dialog: MatDialog, private authService: AuthService) {
    this.subscription = this.customersDatabaseService.updatedView.subscribe(()=>{
      this.loadData()
    })
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.loadData()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadData(){
    this.customersDatabaseService.getCustomers().subscribe((data: any) => {
      this.customers = data.filter((e:any) => e.employeeId === this.authService.employeeId);
      this.customersDatabaseService.customersQuantity = this.customers.length
      this.dataSource.data = this.customers;
      this.customersDatabaseService.customersDatabase = data;
    });
  }

  editCustomer(arg:any, i:any){
    this.customersDatabaseService.customerValue = arg;
    console.log(arg)
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.customersDatabaseService.customerUpdating = true;
  }
  deleteCustomer(arg:any){
    this.customersDatabaseService.deleteCustomerService(arg).subscribe({
      next: (data) => console.log(data),
      error: (err) => {console.log(err)}
    });
    this.loadData();
    this.customersDatabaseService.openSnackBar('Customer deleted')
  }
}


import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersDatabaseService } from 'src/app/services/customers-database.service';

@Component({
  selector: 'app-customer-database',
  templateUrl: './customer-database.component.html',
  styleUrls: ['./customer-database.component.scss']
})
export class CustomerDatabaseComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  customers:any = []

  constructor(private customersDatabaseService: CustomersDatabaseService ){
    this.dataSource = new MatTableDataSource(users);
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(){
    this.customersDatabaseService.getCustomers().subscribe((data:any) => {
      this.customers = data;
    })
  }
}

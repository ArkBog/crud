import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChangeTabService } from 'src/app/services/change-tab.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private subscription: Subscription;

  constructor(private changeTab: ChangeTabService){
    this.subscription = this.changeTab.newTab.subscribe(()=>{
      this.switchTab(1)
    })
  }

  selectedTabIndex = 0

  switchTab(index:number){
    this.selectedTabIndex = index
  }
}

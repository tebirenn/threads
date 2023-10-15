import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  accounts: any[] = [];

  constructor(private dataService: DataService) {
    const data = this.dataService.getData();
    this.accounts = data.accounts;
    console.log(this.accounts);
  }
}

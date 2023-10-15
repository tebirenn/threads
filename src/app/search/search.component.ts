import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  accounts: any[] = [];

  constructor(private dataService: DataService) {
    const data = this.dataService.getData();
    this.accounts = data.accounts;
    console.log(this.accounts);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private myData: any = {
    accounts: [
      { username: 'rusyaless', name: 'Руся' },
      { username: 'tebirenn', name: 'Алан' },
      { username: 'adeem', name: 'Адема' },
      { username: 'qqHomie', name: 'Нурсултан' },
    ]
  };
  
  getData() {
    return this.myData;
  }

  addData(item: any) {
    this.myData.push(item);
  }

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private myData: any = {
    accounts: [
      { username: 'rusyaless', name: 'Руся', subs: 0 },
      { username: 'tebirenn', name: 'Алан', subs: 0 },
      { username: 'adeem', name: 'Адема', subs: 0 },
      { username: 'qqHomie', name: 'Нурсултан', subs: 0 },
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

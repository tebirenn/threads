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

  private posts: any = {
    posts: [
      { username: 'rusyaless', description: 'Для тех кто думает что роботизация это что-то далекое и не скорое.\n' +
          'Amazon уже вовсю внедряет это на своих складах.', likes: 104 },
      { username: 'tebirenn', description: 'Для тех кто думает что роботизация это что-то далекое и не скорое.\n' +
      'Amazon уже вовсю внедряет это на своих складах.', likes: 104 },
      { username: 'adeem', description: 'Для тех кто думает что роботизация это что-то далекое и не скорое.\n' +
      'Amazon уже вовсю внедряет это на своих складах.', likes: 104 },
      { username: 'qqHomie', description: 'Для тех кто думает что роботизация это что-то далекое и не скорое.\n' +
      'Amazon уже вовсю внедряет это на своих складах.', likes: 104 },
    ]
  };

  getData() {
    return this.myData;
  }

  getPosts() {
    return this.posts;
  }
  addData(item: any) {
    this.myData.push(item);
  }

  constructor() { }
}

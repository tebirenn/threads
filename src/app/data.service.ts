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
      { username: 'tebirenn', description: 'SLAM MAKHACHEV HEAD KICK KOs ALEX VOLKANOVSKI 🤯', likes: 105 },
      { username: 'adeem', description: 'Mcgregor wants to see Paulo vs Khamzat !', likes: 2434 },
      { username: 'qqHomie', description: 'Denis Bouanga is the 2023 MLS Golden Boot winner 👟', likes: 1245},
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

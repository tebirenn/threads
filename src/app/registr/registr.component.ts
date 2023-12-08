import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent {
  model: any = {};

    constructor(private router: Router) { }

    onSubmit() {
        // Здесь должен быть код для отправки данных на сервер
        console.log('Username: ' + this.model.username);
        console.log('Password: ' + this.model.password);
        this.router.navigate(['']);
    }
}

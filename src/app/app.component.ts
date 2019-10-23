import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any[];

  ngOnInit() {
    this.list = [
      {
        id: 1,
        title: 'Администратор',
        checked: true,
      },
      {
        id: 2,
        title: 'Пользователь',
        checked: false,
      },
      {
        id: 3,
        title: 'Директор',
        checked: true,
      },
      {
        id: 4,
        title: 'Начальник',
        checked: false,
      },
    ]
  }

  get result() {
    return this.list.filter(item => item.checked);
  }

}

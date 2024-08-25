import { Component } from '@angular/core';

interface Page {
  title: string;
  url: string;
  icon: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: Page[] = [
  ];
  constructor() {}
}

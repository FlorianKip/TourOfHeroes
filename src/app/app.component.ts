import { Component } from '@angular/core';
import * as Parse from 'parse';

Parse.initialize('myAppId');
(Parse as any).serverURL = 'http://parse.flokip.de:1337/parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes (Parse Edition)';
}

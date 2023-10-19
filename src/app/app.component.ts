import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
  title = 'AngularApp';

  constructor(private appService: AppService) {}

  msg = '';

  getDemoPerson(valueId: string): void {
    this.appService
      .getApi(valueId)
      .subscribe(
        (message) =>
          (this.msg = `ID: ${message['body']['message']['person_id']['S']}, Name: ${message['body']['message']['name']['S']}`)
      );
  }

  postDemoPerson(valueId: string, valueName: string): void {
    this.appService
      .postApi(valueId, valueName)
      .subscribe((message) => (this.msg = message['body']['message']));
  }

  putDemoPerson(valueId: string, valueName: string): void {
    this.appService
      .putApi(valueId, valueName)
      .subscribe((message) => (this.msg = message['body']['message']));
  }

  deleteDemoPerson(valueId: string): void {
    this.appService
      .deleteApi(valueId)
      .subscribe((message) => (this.msg = message['body']['message']));
  }
}

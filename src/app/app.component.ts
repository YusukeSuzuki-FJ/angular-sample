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

  msg = 'test';

  getDemoPerson(valueId: string): any {
    try {
      this.appService
        .getApi(valueId)
        .subscribe(
          (message) =>
            (this.msg = `ID: ${message['body']['message']['person_id']['S']}, Name: ${message['body']['message']['name']['S']}`)
        );
    } catch (error) {
      this.msg = `Error: ${error}`;
      // throw error;
      throw new Error();
    }
  }

  postDemoPerson(valueId: string, valueName: string): any {
    this.appService
      .postApi(valueId, valueName)
      .subscribe((message) => (this.msg = message['body']['message']));
  }

  putDemoPerson(valueId: string, valueName: string): any {
    this.appService
      .putApi(valueId, valueName)
      .subscribe((message) => (this.msg = message['body']['message']));
  }

  deleteDemoPerson(valueId: string): any {
    this.appService
      .deleteApi(valueId)
      .subscribe((message) => (this.msg = message['body']['message']));
  }

  testDemoPerson() {
    console.log('test');
  }
}

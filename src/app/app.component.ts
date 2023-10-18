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
  onClick(valueId: string, valueName: string) {
    this.msg = `ID: ${valueId}, Name: ${valueName}`;
  }

  getDemoPerson(valueId: string, valueName: string): void {
    this.appService
      .getApi(valueId, valueName)
      .subscribe(
        (message) =>
          (this.msg = `ID: ${valueId}, Name: ${message['body']['message']['S']}`)
      );
  }

  putDemoPerson(): void {
    this.appService
      .putApi()
      .subscribe((message) => (this.msg = message['body']));
  }

  deleteDemoPerson(): void {
    this.appService.deleteApi().subscribe();
  }
}

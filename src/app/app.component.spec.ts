import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';

class MockAppService {
  getApi(id: string): Observable<any> {
    if (id === '0') {
      return of({
        body: { message: { person_id: { S: '1' }, name: { S: 'test' } } },
      });
    } else {
      throw new TypeError('typeError');
    }
  }

  postApi(id: string, name: string): Observable<any> {
    return of({ body: { message: '登録に成功' } });
  }

  putApi(id: string, name: string): Observable<any> {
    return of({ body: { message: '更新しました' } });
  }

  deleteApi(id: string): Observable<any> {
    return of({ body: { message: '削除に成功' } });
  }

  catch(): any {
    return 'Error';
  }
}

describe('AppComponent', () => {
  var appComponent: AppComponent;
  var appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: AppService, useClass: MockAppService },
      ],
    });

    appComponent = TestBed.inject(AppComponent);
    appService = TestBed.inject(AppService);
  });
  //成功
  it('getDemoPersonを実施した場合、メッセージが出力されること', () => {
    appComponent.getDemoPerson('0');
    expect(appComponent.msg).toContain('1');
  });

  it('postDemoPersonを実施した場合、メッセージが出力されること', () => {
    appComponent.postDemoPerson('100', 't');
    expect(appComponent.msg).toContain('登録');
  });

  it('putDemoPersonを実施した場合、メッセージが出力されること', () => {
    appComponent.putDemoPerson('100', 't');
    expect(appComponent.msg).toContain('更新');
  });

  it('deleteDemoPersonを実施した場合、メッセージが出力されること', () => {
    appComponent.deleteDemoPerson('100');
    expect(appComponent.msg).toContain('削除');
  });

  //失敗
  it('getDemoPersonが失敗した場合、エラーになること', () => {
    // try {
    // appComponent.getDemoPerson('1');
    // } catch (error) {
    //   expect(appComponent.msg).toContain('Error');
    // }
    // expect(false).toBeTruthy();
    expect(function () {
      appComponent.getDemoPerson('1');
    }).toThrow(Error());
  });

  //引数なしメソッドの分岐
  // it('引数なしメソッドの分岐', () => {
  //   spyOn(appComponent, 'testDemoPerson');
  // });
});

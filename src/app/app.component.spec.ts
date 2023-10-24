import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';

describe('AppComponent', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let appService: AppService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('getDemo', ['getApi']);

    appService = new AppService(httpClientSpy);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AppComponent],
      providers: [provideHttpClient(), provideHttpClient(), AppService],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have as title 'AngularApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('AngularApp');
  });

  it(`モック化されているか`, () => {
    expect(appService).toBeTruthy();
  });

  it(`モック用の配列を返却`, () => {
    const appService = TestBed.inject(AppService);
    const id = '100';
    const returnData: any = { id: '100', name: 'suzuki' };
    const result$ = appService.getApi(id);
    result$.subscribe((result) => {
      expect(result).toEqual(returnData);
    });
  });

  // it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
  //   const expectedHeroes: any = [
  //     { id: 1, name: 'A' },
  //     { id: 2, name: 'B' },
  //   ];

  //   const spy = spyOn(AppComponent, 'getDemoPerson');

  //   const id = '100';

  //   // httpClientSpy.get.and.returnValue(expectedHeroes);

  //   appService.getApi(id).subscribe({
  //     next: (heroes) => {
  //       expect(heroes).withContext('expected heroes').toEqual(expectedHeroes);
  //       done();
  //     },
  //     error: done.fail,
  //   });
  //   expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'AngularApp app is running!'
  //   );
  // });

  // it('getDemopersonを実行した場合、idとnameが取得できること', (done: DoneFn) => {
  //   const spyFunc = jasmine.createSpy('testFunc');
  //   const spyObj = jasmine.createSpyObj('testObj', ['get']);

  //   const id = '100';

  //   const returnData: any = { id: '100', name: 'suzuki' };

  //   spyObj.get.and.returnValue(returnData);
  //   expect(spyObj).toHaveBeenCalled();
  //   expect(spyObj.get.calls.count()).withContext('one call').toBe(1);

  // appService.getApi(id).subscribe({
  //   next: (response) => {
  //     expect(response).withContext('person').toEqual('person');
  //     done();
  //   },
  //   error: done.fail,
  // });
  // });
});

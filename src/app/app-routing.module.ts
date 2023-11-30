import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'second', component: SecondpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

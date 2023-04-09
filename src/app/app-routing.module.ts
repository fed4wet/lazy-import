import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DownloadComponent} from "./download/download.component";

const routes: Routes = [
  {
    path: "download",
    component: DownloadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

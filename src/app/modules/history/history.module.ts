import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    HistoryPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TransferMoneyDashboardComponent } from '../app/components/transfer-money-dashboard/transfer-money-dashboard.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { MakeATransferFormComponent } from '../app/components/make-a-transfer-form/make-a-transfer-form.component';
import { RecentTransactionsComponent } from '../app/components/recent-transactions/recent-transactions.component';
import { FilterSearchComponent } from '../app/components/filter-search/filter-search.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

import { TransactionsFilterAndSortPipe } from './pipes/transactions-filter-and-sort.pipe';

import { TransactionsService } from './services/transactions/transactions.service';

import { Globals } from './globals';
@NgModule({
  declarations: [
    AppComponent,
    TransferMoneyDashboardComponent,
    HeaderComponent,
    MakeATransferFormComponent,
    RecentTransactionsComponent,
    PageNotFoundComponent,
    FilterSearchComponent,
    TransactionsFilterAndSortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TransactionsService,
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

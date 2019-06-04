import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferMoneyDashboardComponent } from '../app/components/transfer-money-dashboard/transfer-money-dashboard.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';;

const routes: Routes = [
  { path: '', component: TransferMoneyDashboardComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
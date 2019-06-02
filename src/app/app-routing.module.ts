import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferMoneyDashboardComponent } from '../app/components/transfer-money-dashboard/transfer-money-dashboard.component';

const routes: Routes = [
  { path: '', component: TransferMoneyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

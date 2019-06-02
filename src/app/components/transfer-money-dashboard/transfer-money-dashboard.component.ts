import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../models/Transfer';
import { Transaction } from 'src/app/models/Transaction';
import axios from 'axios';
import { Globals } from '../../globals';
import { TransactionsService } from '../../services/transactions/transactions.service';

@Component({
  selector: 'app-transfer-money-dashboard',
  templateUrl: './transfer-money-dashboard.component.html',
  styleUrls: ['./transfer-money-dashboard.component.scss']
})

export class TransferMoneyDashboardComponent implements OnInit {

  updatedTransactions : Transaction[] = [];
  newTransaction: Transaction;
  updatedBalance: number;
  loadingTransactionsError : boolean = false;

  constructor(private globals : Globals, private transactionsService : TransactionsService) {}

  ngOnInit() {

    this.updatedBalance = 5876.76;

    this.transactionsService.getTransactions()
      .then(transactions => {
        this.updatedTransactions = transactions;
      })
      .catch(err => {
        this.loadingTransactionsError = true;
        // TODO : display error message
      });

  }

  addNewTransfer = ({ toAccount, amount } : Transfer): void => {

    if ('' !== toAccount && null !== amount) {

      this.newTransaction = {
        amount: amount.toFixed(2),
        categoryCode: '',
        merchant: toAccount,
        merchantLogo: `https://logo.clearbit.com/${toAccount}.com`,
        transactionDate: new Date().getTime(),
        transactionType: this.getRandomTransactionType()
      }
  
      this.updatedTransactions.unshift(this.newTransaction);
      this.updatedBalance = Number((this.updatedBalance - amount).toFixed(2));
    }

  }

  getRandomTransactionType = () : string => {

    const keys = Object.keys(this.globals.transactionTypes)

    const randomNum = Math.floor(Math.random() * Math.floor(keys.length));

    return keys[randomNum];
    
  }

}
import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { SortValues } from '../models/SortValues';

@Pipe({ name: 'transactionsFilterAndSort' })
export class TransactionsFilterAndSortPipe implements PipeTransform {
  transform(transactions: Transaction[] = [], searchText: string = '', sortBy: string = null, direction: string = null): any[] {

    if (transactions.length < 1) {
      return [-1];
    }

    if ('' !== searchText) {
      const reg = new RegExp(searchText, 'i');
      transactions = transactions.filter(transaction => reg.test(transaction.merchant));
    }

    if (transactions.length > 0 && null !== sortBy && null !== direction) {

      return transactions.sort((aTran, bTran) => {

        let a: any;
        let b: any;

        if (direction === 'DESC') {

          a = aTran[sortBy];
          b = bTran[sortBy];

        } else {
          b = aTran[sortBy];
          a = bTran[sortBy];
        }
        if (sortBy === 'amount') {
          a = Number(a);
          b = Number(b);
        }

        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      if (transactions.length < 1) {
        return [-1];
      } else {
        return transactions;
      }

    }
  }
};
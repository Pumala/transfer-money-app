import { Component, Input } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Transaction } from '../../models/Transaction';
import { SortDirectionTracker } from '../../models/SortDirectionTracker';
import { Transfer } from '../../models/Transfer';
import { Globals } from '../../globals';

@Component({
  selector: 'app-recent-transactions-dashboard',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss']
})

export class RecentTransactionsComponent {

    @Input() transactions : Transaction[];
    @Input() searchKeywords : string;

    // could be 1 of 3 values => transactionDate, merchant, or amount once user selects
    sortBy : string = ''; 
    // ASC or DESC 
    direction : string;

    constructor(private globals : Globals) {}

    clearSearchAndResetResults = (e) : void => {
        this.searchKeywords = '';
    }

    updateSearchKeywords = (value) : void => {
        
        this.searchKeywords = value;
    }

    receiveSearchKeywords = (search : string) : void => {

        this.searchKeywords = search;

    }

    receiveSortDirection = ({ sortType, direction }) : void => {

        this.sortBy = sortType;
        this.direction = direction;

    }

    getBorderColor = (transaction) : object => {

        if (transaction === -1) {
            return {
                'none' : true
            }
        } else {
            const color = this.globals.transactionTypes[transaction.transactionType];
            return {
                [color] : true
            }
        }

    }

}
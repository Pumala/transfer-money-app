import { Component, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
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

export class RecentTransactionsComponent implements OnChanges {

    @Input() transactions : Transaction[];

    @Input() searchKeywords : string;
    sortByAscDate : boolean;
    sortByAscBeneficiary : boolean = null;
    sortByAscAmount : boolean = null;
    // could be 1 / 4 values => ascDate, descDate, beneficary, amount
    sortBy : string; 
    // ASC or DESC 
    direction : string;

    constructor(private globals : Globals) {
    // this.searchKeywords = '';
        this.sortBy = '';
        this.sortByAscDate = null,
        this.sortByAscBeneficiary = null,
        this.sortByAscAmount = null;
    
    }

    ngOnChanges(changes : SimpleChanges) {
        // console.log('ANY CHANGES...', changes);
        const item : SimpleChange = changes.item;

        if (item) {
            // console.log('new changes happening....', item);
            // console.log('prev val', item.previousValue);
            // console.log('curr val', item.currentValue);
        }
        
    }

    clearSearchAndReset = () => {
        this.searchKeywords = '';
        // console.log('REACHED!!!!');
    }

    updateSearchKeywords = (value) => {
        
        this.searchKeywords = value;
    }

    receiveSearchKeywords = (search : string) => {
        this.searchKeywords = search;
    }

    receiveSortDirection = ({ sortType, direction }) => {

        this.sortBy = sortType;
        this.direction = direction;
    }

    getBorderColor = (transaction) => {

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
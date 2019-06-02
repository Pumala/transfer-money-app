import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SortDirectionTracker } from '../../models/SortDirectionTracker';
import { Globals } from '../../globals';

@Component({
    selector: 'app-filter-search',
    templateUrl: './filter-search.component.html',
    styleUrls: ['./filter-search.component.scss']
})

export class FilterSearchComponent implements OnInit {

    searchKeywords: string = "";
    @Output() searchKeywordsEvent = new EventEmitter<string>();
    @Output() sortDirectionEvent = new EventEmitter<object>();
    @Output() clearSearchAndResetEvent = new EventEmitter<boolean>();

    sortDirectionTracker : SortDirectionTracker;
    sortType : string;

    constructor(private globals : Globals) {
        this.sortDirectionTracker = {
            transactionDate: this.globals.asc,
            merchant: this.globals.asc,
            amount: this.globals.asc
        }
    }

    ngOnInit() { }

    clearSearchAndReset = () => {
        this.searchKeywords = '';
        this.clearSearchAndResetEvent.emit(true);
    }

    updateSearchKeywords = (e: string) => {
        this.searchKeywordsEvent.emit(e);

    }

    changeSortAndDirection = (sortType, currDirection) => {

        this.sortType = sortType;
        let direction : string;

        if (currDirection === this.globals.asc) {
            direction = this.globals.desc;
        } else {
            direction = this.globals.asc;
        }

        // update sort direction tracker
        this.sortDirectionTracker[sortType] = direction;

        this.sortDirectionEvent.emit({ sortType, direction });
    }

    updateArrowDirection = (sortName) => {
        return { 
            'triangle-down' : this.sortDirectionTracker[sortName] === this.globals.desc, 
            'triangle-up': this.sortDirectionTracker[sortName] === this.globals.asc 
        }
    }

    checkIfActive = (sortName) => {
        return {
            'active' : this.sortType === sortName
        }
    }

}
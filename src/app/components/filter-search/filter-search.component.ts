import { Component, Output, EventEmitter } from '@angular/core';
import { SortDirectionTracker } from '../../models/SortDirectionTracker';
import { Globals } from '../../globals';

@Component({
    selector: 'app-filter-search',
    templateUrl: './filter-search.component.html',
    styleUrls: ['./filter-search.component.scss']
})

export class FilterSearchComponent {

    @Output() searchKeywordsEvent = new EventEmitter<string>();
    @Output() sortDirectionEvent = new EventEmitter<object>();
    @Output() clearSearchAndResetEvent = new EventEmitter<boolean>();

    sortType : string;

    searchKeywords: string = "";

    sortDirectionTracker : SortDirectionTracker = this.sortDirectionTracker = {
        transactionDate: this.globals.asc,
        merchant: this.globals.asc,
        amount: this.globals.asc
    }

    constructor(private globals : Globals) {
    }

    clearSearchAndReset = () : void => {

        this.searchKeywords = '';
        this.clearSearchAndResetEvent.emit(true);

    }

    updateSearchKeywords = (e: string) : void => {

        this.searchKeywordsEvent.emit(e);

    }

    changeSortAndDirection = (sortType, currDirection) : void => {

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

    updateArrowDirection = (sortName) : object => {
        return { 
            'triangle-down' : this.sortDirectionTracker[sortName] === this.globals.desc, 
            'triangle-up': this.sortDirectionTracker[sortName] === this.globals.asc 
        }
    }

    checkIfActive = (sortName) : object => {
        return {
            'active' : this.sortType === sortName
        }
    }

}
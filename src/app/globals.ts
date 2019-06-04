import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

    asc : string = 'ASC';

    desc : string = 'DESC';

    transactionTypes : object = {
        'Card Payment' : 'green', 
        'Online Transfer': 'orange', 
        'Transaction' : 'blue'
    };

    invalidAmountErrMsg : string = 'Please enter a valid amount.';

    missingFieldsErrMsg : string = 'Please fill in all the required fields.';

    minAmountErrMsg : string = 'Minimum transfer amount of 0.01.';
    
    exceedsBalanceErrMsg : string = 'Exceeds balance limit of -$500.';

    initialBalance : number = 5876.76;
        
}
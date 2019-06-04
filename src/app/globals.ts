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

}
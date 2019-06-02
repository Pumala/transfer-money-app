import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

    months : string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];    

    daysOfWeek : string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    username : string;

    asc : string = 'ASC';

    desc : string = 'DESC';

    transactionTypes : object = {'Card Payment' : 'green', 'Online Transfer': 'orange', 'Transaction' : 'blue'};

}
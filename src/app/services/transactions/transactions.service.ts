import { Injectable } from '@angular/core';
import axios from 'axios';
import { Transaction } from 'src/app/models/Transaction';

@Injectable({
    providedIn: 'root'
})
export class TransactionsService {

    getTransactions = async () : Promise<Transaction[]> => {

        const res = await axios.get('/assets/mock/transactions.json');

        return res.data.data;
    }
}
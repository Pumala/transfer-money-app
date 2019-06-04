import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { Transfer } from '../../models/Transfer';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Globals } from '../../globals';
@Component({
  selector: 'app-transfer-form',
  templateUrl: './make-a-transfer-form.component.html',
  styleUrls: ['./make-a-transfer-form.component.scss']
})

export class MakeATransferFormComponent implements OnChanges {

  makeATransferForm: FormGroup;

  @Output() makeTransferEvent = new EventEmitter<Transfer>();
  @Input() balance : number;
  
  transfer : Transfer;
  hasEmptyFields : boolean = false;
  errorMessage : string;
  balanceLimit : number = -500;
  minTransferAmount : number = 0.01;

  constructor(private formBuilder: FormBuilder, private globals: Globals) { }  

  ngOnChanges(changes : SimpleChanges) {

    this.balance = changes.balance.currentValue;

    this.makeATransferForm = this.formBuilder.group({
      toAccount: ['', Validators.required],
      amount: [null, Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.makeATransferForm.controls; }

  onSubmit = () : void => {
    this.validateTransfer();
  }

  validateTransfer = () : void => {

    if (this.makeATransferForm.invalid) {
      if (this.f.amount.touched && this.f.amount.errors) {
        this.errorMessage = this.globals.invalidAmountErrMsg;
      } else {
        this.hasEmptyFields = true;
        this.errorMessage = this.globals.missingFieldsErrMsg;
      }

    } else {
      this.errorMessage = this.checkTransactionIsValid();

      if (!this.errorMessage) {
        this.hasEmptyFields = false;
        this.makeTransferEvent.emit(this.makeATransferForm.value);
        this.makeATransferForm.reset();
      }
    }

  }

  checkTransactionIsValid = () : string => {
    if (this.makeATransferForm.value.amount < this.minTransferAmount) {
      return this.globals.minAmountErrMsg;
    } else if (this.balance - this.makeATransferForm.value.amount < this.balanceLimit) {
      return this.globals.exceedsBalanceErrMsg;
    } else {
      return '';
    }
  }

};
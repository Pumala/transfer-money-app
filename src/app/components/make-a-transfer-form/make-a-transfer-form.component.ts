import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { Transfer } from '../../models/Transfer';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }  

  ngOnChanges(changes : SimpleChanges) {

    this.balance = changes.balance.currentValue;

    this.makeATransferForm = this.formBuilder.group({
      toAccount: ['', Validators.required],
      amount: [null, Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.makeATransferForm.controls; }

  onSubmit = () => {
    this.validateTransfer();
  }


  validateTransfer = () => {

    if (this.makeATransferForm.invalid) {
      if (this.f.amount.touched && this.f.amount.errors) {
        this.errorMessage = 'Please enter a valid amount.';
      } else {
        this.hasEmptyFields = true;
        this.errorMessage = 'Please fill in all the required fields.';
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
      return 'Minimum transfer amount of 0.01.';
    } else if (this.balance - this.makeATransferForm.value.amount < this.balanceLimit) {
      return 'Exceeds balance limit of -$500.';
    } else {
      return '';
    }
  }

};
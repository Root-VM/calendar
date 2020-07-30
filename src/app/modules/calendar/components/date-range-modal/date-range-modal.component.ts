import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {MatDialogRef} from '@angular/material/dialog';
import {DateRangeService} from '../../services/date-range.service';

@Component({
  selector: 'app-date-range-modal',
  templateUrl: './date-range-modal.component.html',
  styleUrls: ['./date-range-modal.component.scss']
})
export class DateRangeModalComponent implements OnInit {
  dateForm: FormGroup;
  types = [
    {value: 'vocation', viewValue: 'Vocation'},
    {value: 'sick leave', viewValue: 'Sick Leave'},
  ];

  constructor(
    private fb: FormBuilder,
    private dateRangeService: DateRangeService,
    private dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.dateForm = this.fb.group({
      rangeType: [ '', [Validators.required] ],
      beginFrom: [ '', [Validators.required] ],
      endOn: [ '', [Validators.required] ]
    });
  }

  updateRangeDate() {
    if (this.dateForm.status  === 'VALID') {
      const value = this.dateForm.value;

      // change date format
      value.beginFrom = moment(value.beginFrom).format('YYYY-MM-DD');
      value.endOn = moment(value.endOn).format('YYYY-MM-DD');

      if (value.beginFrom <= value.endOn) {
        this.dateRangeService.update({...value, id: 1});
        this.dialogRef.close();
      }
    }
  }
}

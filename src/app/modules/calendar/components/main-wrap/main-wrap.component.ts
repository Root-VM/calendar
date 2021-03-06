import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DateRangeModalComponent} from '../date-range-modal/date-range-modal.component';
import {DateRangeService} from '../../services/date-range.service';

@Component({
  selector: 'app-main-wrap',
  templateUrl: './main-wrap.component.html',
  styleUrls: ['./main-wrap.component.scss']
})
export class MainWrapComponent implements OnInit {

  constructor(
    private dateRangeService: DateRangeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dateRangeService.getAll();
  }

  openDialog() {
    this.dialog.open(DateRangeModalComponent);
  }

}

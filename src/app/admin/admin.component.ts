import { Component, OnInit } from '@angular/core';
import feather from 'feather-icons';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    feather.replace();
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpParams } from "@angular/common/http";
import DataSource from "devextreme/data/data_source";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  customers;
  constructor(private userService: UserService,
    httpClient: HttpClient) {

    // this.customers = userService.getCustomers();
    this.customers = new DataSource({
      requireTotalCount: false,
      key: "id",
      load: (loadOptions) => {
        console.log('loadoptions', loadOptions);

        var params = '?';

        params += 'skip=' + loadOptions.skip || 0;
        params += '&take=' + loadOptions.take || 10;

        if (loadOptions.sort) {
          params += '&orderby=' + loadOptions.sort[0].selector;
          if (loadOptions.sort[0].desc) {
            params += ' desc';
          }
        }
        // let params: HttpParams = new HttpParams();
        // [
        //   "skip",
        //   "take",
        //   "requireTotalCount",
        //   "requireGroupCount",
        //   "sort",
        //   "filter",
        //   "totalSummary",
        //   "group",
        //   "groupSummary"
        // ].forEach(function (i) {
        //   if (i in loadOptions && this.isNotEmpty(loadOptions[i]))
        //     params = params.set(i, JSON.stringify(loadOptions[i]));
        // });
        return httpClient.get('http://localhost:3000/api/2.0/users' + params)
          .toPromise()
          .then((result: any) => {
            return {
              data: result.data,
              totalCount: result.totalCount
            };
          });
      }
    });
  }

  ngOnInit() {
  }

  isNotEmpty(value: any): boolean {
    return value !== undefined && value !== null && value !== "";
  }
}

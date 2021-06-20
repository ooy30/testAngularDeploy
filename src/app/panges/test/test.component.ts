import { Component, OnInit } from '@angular/core';
import {TestGetDataService} from './../../service/test-get-data.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private testGetDataService:TestGetDataService) { }

  ngOnInit(): void {

    this.testGetDataService.getdata()
      .subscribe(
        (res: any) => {
          console.log(res);
          
        }, (error) => {
          alert('error ' + error.status);
        }
      );
  }
}



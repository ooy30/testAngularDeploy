import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-data-dialog-test',
  templateUrl: './add-data-dialog-test.component.html',
  styleUrls: ['./add-data-dialog-test.component.scss']
})
export class AddDataDialogTestComponent implements OnInit {
  items : any[] = [];
  constructor() { }
  ngOnInit(): void {
    this.items = [];
    for (let index = 1; index < 10; index++) {
      var item = '';
      for (let i = 1; i <= index; i++) {
        console.log(index);
        item = item+' '+index
      
      }
      this.items.push(item);
    }
  }

}

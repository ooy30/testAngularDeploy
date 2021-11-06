import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {TestGetDataService} from './../../service/test-get-data.service'
import { AddDataDialogComponent } from './add-data-dialog/add-data-dialog.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  listdta:any
  constructor(private testGetDataService:TestGetDataService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    // saveData(body:any) 
   this.loadData();
  }

  loadData(){
     this.testGetDataService.getdata()
      .subscribe(
        (res: any) => {
          console.log(res);
          this.listdta=res;
        }, (error) => {
          alert('error ' + error.status);
        }
      );
  }



  saveData(data:any){
    this.testGetDataService.saveData(data)
     .subscribe(
       (res: any) => {
         console.log(res);
         this.loadData();
       }, (error) => {
         alert('error ' + error.status);
       }
     );
 }

 openDialog(header: string) {
  //this.addressFormGroup.patchValue(formGroup.value);
  const dialogRef = this.matDialog.open(AddDataDialogComponent,{
    width: '500px',
    data: { header: header
      }
  });

  dialogRef.afterClosed().subscribe((result:any) => {
    
    
    if (result) {
      console.log(result);
      var formData: any = new FormData();
      formData.append('name', result.value.name);
      formData.append('pathFile',result.file);
      this.saveData(formData);
    }


  });
}

searchData(event:any){
  console.log(event.target.value);
   this.testGetDataService.searchData({searchText:event.target.value})
      .subscribe(
        (res: any) => {
          console.log(res);
          this.listdta=res;
        }, (error) => {
          alert('error ' + error.status);
        }
      );
}


 
}


function SettingCoverManageComponent(SettingCoverManageComponent: any, arg1: { width: string; data: { header: string; detail: any; }; }) {
  throw new Error('Function not implemented.');
}


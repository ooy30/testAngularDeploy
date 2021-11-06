import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-data-dialog',
  templateUrl: './add-data-dialog.component.html',
  styleUrls: ['./add-data-dialog.component.scss']
})
export class AddDataDialogComponent implements OnInit {


  imagesProfile_form: File | undefined;
  imagesProfile_show: any = null;
  formData: FormGroup = this.formBuilder.group({
    name: new FormControl({ value: '', disabled: false }),
    pathFile: new FormControl({ value: '', disabled: false })
  });
  @ViewChild('myInputImg', { static: true }) myInputImg: ElementRef<HTMLInputElement> | undefined;


  constructor(
    public dialogRef: MatDialogRef<AddDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    

  }

  onSubmitForm() {
    
      if (this.formData.valid && this.imagesProfile_form) {
        let obj = { value: this.formData.value, file: this.imagesProfile_form }
        this.dialogRef.close(obj);
      }

  }

  uploadFileProfile(event: any) {

    const file = event.target.files[0];

    if (file != undefined) {
      this.imagesProfile_form = file;
    }

    const reader = new FileReader();
    reader.onload = (e) => (this.imagesProfile_show = reader.result);
    reader.readAsDataURL(file);
  }

}

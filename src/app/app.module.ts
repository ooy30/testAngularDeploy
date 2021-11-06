import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './panges/test/test.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatBadgeModule } from "@angular/material/badge";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddDataDialogComponent } from './panges/test/add-data-dialog/add-data-dialog.component';
import { AddDataDialogTestComponent } from './panges/test/add-data-dialog-test/add-data-dialog-test.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddDataDialogTestComponent,
    AddDataDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    LayoutModule,
    MatSelectModule,
    MatDatepickerModule,
    OverlayModule,
    MatBadgeModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatRadioModule,
    MatSlideToggleModule
    

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [

  ],
  entryComponents: [
    AddDataDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

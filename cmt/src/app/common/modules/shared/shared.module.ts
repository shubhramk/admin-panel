import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatOptionModule, MatRadioModule,
         MatSlideToggleModule, MatButtonModule, MatExpansionModule,
         MatCheckboxModule, MatCommonModule, MatProgressSpinnerModule, MatTooltipModule,
         MatProgressBarModule, MatIconModule, MatNativeDateModule} from '@angular/material';

import {MatDatepickerModule } from '@angular/material/datepicker';
import {ClickOutSideModule} from './../clickoutside/clickoutside.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCommonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    ClickOutSideModule
  ],
  declarations: [

  ],
  providers: [

  ],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatExpansionModule,
    MatCommonModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ClickOutSideModule
  ]
})
export class SharedModule { }

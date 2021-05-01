

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxEditorModule } from 'ngx-editor';
import {
  InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
  PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataTableModule, DataListModule,
  SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
  TooltipModule,TreeModule
} from 'primeng/primeng';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { ShowDocsComponent } from './show-docs/show-docs.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    NgxEditorModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    TreeModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataTableModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
    TooltipModule
  ],
  exports: [
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    NgxEditorModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    TreeModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule, InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, CalendarModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataTableModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
    TooltipModule, jqxKanbanComponent
  ],
  declarations: [jqxKanbanComponent, DeleteConfirmDialogComponent, HelpDialogComponent, ShowDocsComponent]
})
export class SharedModule { }

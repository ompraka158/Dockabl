import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveComponent } from './components/objective/objective.component';
import { CreateObjectiveComponent } from './components/create-objective/create-objective.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatExpansionModule, MatIconModule, MatDatepickerModule, MatSelectModule, MatRadioGroup, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ObjectiveComponent, CreateObjectiveComponent],
  imports: [
    CommonModule,
    MatStepperModule, 
    MatInputModule, 
    MatButtonModule, 
    MatAutocompleteModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ObjectiveComponent, CreateObjectiveComponent],
})
export class CoreModule { }

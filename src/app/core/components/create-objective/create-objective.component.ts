import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OWNERSHIPS, SUGGESTIONS } from '../../constants/ownerships';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-objective',
  templateUrl: './create-objective.component.html',
  styleUrls: ['./create-objective.component.scss']
})
export class CreateObjectiveComponent implements OnInit {

  ownerships = OWNERSHIPS;
  isMultiple: boolean = false;
  selectedValue;
  firstStep: boolean = false;
  secondStep: boolean = false;
  thirdStep: boolean = false;
  fourthStep: boolean = false;
  routeLink: string;
  panelOpenState = false;

  constructor(private _formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(data=> {
        this.routeLink = data.routeLink;
      })
      this.selectedValue = this.ownerships[0].name;
      this.selectSuggestion(this.suggestions[0]);
  }

  userSelectsString = '';
  name = 'Angular';
  userSelects = [];
  suggestions = SUGGESTIONS;
  removeLabel = '';

  show: boolean = false;

  suggest() {
    this.show = true;
  }

  isSelected(s:any) {
   return this.userSelects.findIndex((item) => item.id === s.id) > -1 ? true : false;
  }

  setOwner(data) {
    if(data === this.ownerships[0].name) {      
      this.userSelects = [];
      this.userSelectsString = '';
      this.selectSuggestion(this.suggestions[0]);
    }
  }

  selectSuggestion(s) {
    this.userSelects.find((item) => item.id === s.id) ? 
    this.userSelects = this.userSelects.filter((item) => item.id !== s.id) :
    this.userSelects.push(s);
    this.assignToNgModel();
  }

  done() {
    this.show = false
  }

  assignToNgModel() {
    this.userSelectsString = '';
    this.userSelects.map((item) => {
      if(this.userSelectsString !== '') {
        this.userSelectsString += ', '+ item.name
      } else {
        this.userSelectsString += item.name
      }
    });
    this.removeLabel = ' or Remove';
  }

}

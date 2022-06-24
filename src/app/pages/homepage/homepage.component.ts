import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}


// LIFE CYCLE OF A COMPONENT

/*
COMMUNICATE BTWN VARIOUS COMPONENTS 

1. parent -> child 
    @Input  -directive we used to send data from parent to child  

2. parent <- child
    @Output -directive we used to send data from child to parent


WHEN TWO COMPONENTS ARE UNREALTED ( NOT CONNECTED) THEN 
    component1 -> SERVICES <- component2

E.G. HERE WE CREATED LEADS
THIS IS HIERARCHY OF COMPONENTS parent-child component
  LEADS
    - leads-grid
    - leads-tools
        - download-excel
        - download-pdf

    IF leads-grid and leads-tools want to communicate then they can communicate through services

    SERVICES - common shared reusable functionality shared btwn components 


DIRECTIVE

1. component - ng generate component <component_name>
2. directive - ng generate directive <directive_name>

  structural - ngFor , ngIf , ngSwitch

GENERATE NEW DIRECTIVE 
  ng g directive highlight - where ever we will use it , it will highlight it


  ngIf = done
  *ngFor = done

  ngSwitch
  ngSwitchCase
  ngSwitchDefault

      - « <div [ngSwitch]="switch_expression">

            » <div *ngSwitchCase="match_expression_1">...</div>
            » <div *ngSwitchCase="match_expression_2">...</div>
            « <div *ngSwitchCase="match_expression_3">...</div>
            » <div *ngSwitchDefault>...</div>

        o </div>


*/

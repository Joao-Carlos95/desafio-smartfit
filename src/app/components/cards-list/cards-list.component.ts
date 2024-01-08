import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  unitsList: any[] = [];
  sub!: Subscription;
 
  constructor(private unitService: GetUnitsService) {  }

  ngOnInit(): void {
    this.unitsList = this.unitService.getFilteredUnits();   
    console.log(this.unitsList)
  }
  
}

import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from 'src/app/types/location.interface';
import { GetUnitsService } from './services/get-units.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService) {}
  
  onSubmit() {
    console.log('app');
    
    this.showList.next(true);
    this.unitsList = this.unitService.getFilteredUnits();
  }

  clear(){
    console.log('clar');
    
  this.showList.next(false);
  this.unitsList = [];
  }
}
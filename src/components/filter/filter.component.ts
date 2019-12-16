import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  value: number = 100;
  highValue: number = 1000;
  @Input()isMobileResolution = false;
  @Output()closePopup = new EventEmitter<any>();
  @Output() filerOption = new EventEmitter<any>();
  options: Options = {
    floor: 100,
    ceil: 1000
  };   

  private filterDetails:any = {
    type:"priceRange",
    priceRange:[this.value,this.highValue]
  }
  
  getFilterDetails(){
    return this.filterDetails;
  }
  setFilterDetails(){
    this.filterDetails = {
      type:"priceRange",
      priceRange:[this.value,this.highValue]
    }
  }
  saveFilterDetail(){
    this.setFilterDetails()
    this.filerOption.emit(this.filterDetails);
    this.closePopup.emit()
  }
  cancelFilter(){
    this.closePopup.emit();
  }

}
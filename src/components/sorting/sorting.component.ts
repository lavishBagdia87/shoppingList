import { Component,EventEmitter, OnInit, Input,Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit{

  sortId:number;
  @Input()isMobileResolution = false;
  @Output()closePopup = new EventEmitter<any>();
  @Output() sortOption = new EventEmitter<number>();
  isSubmitted = false;
  constructor(){

  }
  ngOnInit(){

  }

  getSortId(){
    return this.sortId;
  }

  setSortId(id:number){
    this.sortId = id;
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
      this.setSortId(Number(form.value.sort))
      this.sortOption.emit(this.getSortId())
      this.closePopup.emit();
    }
  }

  cancel(){
    this.closePopup.emit();
  }

    
}
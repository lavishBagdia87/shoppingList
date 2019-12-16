import { Component, OnInit } from '@angular/core';
import {ApplicationStateService} from '../../services/application-state.service';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobileResolution:boolean;
  
  faFilter = faFilter;
  faSort = faSort;
  faTimes = faTimes;
  
  isFilter = false;
  isSort = false;
  isPopupOpen = false;

  filterDetail;
  sortId;
  
  constructor(private applicationStateService:ApplicationStateService){

  }

  ngOnInit(){
    this.isMobileResolution= this.applicationStateService.getIsMobileResolution();
  }

  openSort(){
    this.isPopupOpen = true;
    this.isSort = true;
  }
  openFilter(){
    this.isPopupOpen = true;
    this.isFilter = true;
  }
  close(e:any){
    this.isSort = false;
    this.isFilter = false;
    this.isPopupOpen = false;
  }

  applyFilter(obj:any){
    this.filterDetail = obj;
  }

  sortBy(sortId:number){
    this.sortId=sortId;
  }
 
}

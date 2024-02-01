import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-group',
  templateUrl: './search-result-group.component.html',
  styleUrls: ['./search-result-group.component.sass']
})
export class SearchResultGroupComponent {

  @Input() list!:IListItem[];
  @Input() title!:string;

}

export interface  IListItem{
  name: string;
  url: string;
  img: string;
  

}




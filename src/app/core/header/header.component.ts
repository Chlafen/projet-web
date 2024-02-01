import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { LeagueImagePipe } from 'src/app/shared/pipes/league-image/league-image.pipe';
import { LeagueUrlPipe } from 'src/app/shared/pipes/league-url/league-url.pipe';
import { TeamImagePipe } from 'src/app/shared/pipes/team-image/team-image.pipe';
import { loadSearch } from 'src/app/state/actions/search.action';
import { getSearch, getsearchStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {


  search$ = this.store.select(getSearch);
  searchStatus$ = this.store.select(getsearchStatus);

  teamSearchReslt$=this.search$.pipe(map(
    (data) => { const dataa= data?.teamSuggest??[]
      if (dataa.length==0) return []; 
      
      return dataa[0].options?.map(u=>{
        const [name,id]=u.text.split('|');
        const teamimg=new TeamImagePipe().transform(parseInt(id));
        return ({name:name,url:'#' ,img: teamimg})
      }) || []


    }
  ));
  leagueSearchReslt$=this.search$.pipe(map(
    (data) => { const dataa= data?.leagueSuggest??[]
      ??[]
      if (dataa.length==0) return []; 
      return dataa[0].options?.map(u=>{
        const [name,id]=u.text.split('|');
        const leagueimg=new LeagueImagePipe().transform(parseInt(id));
        const leagueurl=new LeagueUrlPipe().transform(parseInt(id));
        return ({name:name,url:leagueurl ,img: leagueimg})
      }) || []
    })
  );
  matchSearchReslt$=this.search$.pipe(map(
    (data) => { const dataa= data?.matchSuggest??[]  
      ??[]
      if (dataa.length==0) return []; 
      return dataa[0].options?.map(u=>{
      
        return ({name:u.text,url:'#' ,img: ''})
      }) || []
    })
  );

constructor(private store:Store){

}
  onSearchCallBack(value:string){
  this.store.dispatch(loadSearch({query:value}));
}

}

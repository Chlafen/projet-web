"use strict";(self.webpackChunkprojet_web=self.webpackChunkprojet_web||[]).push([[22],{5022:(Ue,y,r)=>{r.r(y),r.d(y,{HomeModule:()=>ke});var a=r(6814),d=r(5509),g=r(3069),p=r(8609),_=r(5546),e=r(9468),h=r(2169),m=r(5058),w=r(6673),O=r(3963),M=r(8096);const A=function(t,i){return{backgroundColor:t,color:i}};function L(t,i){if(1&t&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("ngStyle",e.WLB(2,A,null!=n.match.status&&null!=n.match.status.liveTime&&n.match.status.liveTime.short?"$seconday-color":"#555",null!=n.match.status&&null!=n.match.status.liveTime&&n.match.status.liveTime.short?"white":"#bbb")),e.xp6(1),e.hij(" ",n.getMatchStatus()," ")}}function b(t,i){1&t&&e._UZ(0,"div",11)}function I(t,i){1&t&&e._UZ(0,"div")}function Q(t,i){1&t&&e._UZ(0,"div",11)}function J(t,i){1&t&&e._UZ(0,"div")}const S=function(t){return{color:t}};let x=(()=>{class t{constructor(){this.scoreOrTime=""}ngOnInit(){this.scoreOrTime=this.match?.status?.finished||this.match?.status?.liveTime?.short?`${this.match.home?.score} - ${this.match.away?.score}`:this.match.time?.split(" ")[1]??""}getMatchStatus(){return this.match?.status?.finished?"FT":this.match?.status?.liveTime?.short?this.match?.status?.liveTime?.short.slice(0,-1)??"":this.match?.status?.reason?.short??""}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-match-list-item"]],inputs:{match:"match"},decls:22,vars:17,consts:[[1,"match-list-item"],[1,"wrap-item"],[1,"right"],["class","status",3,"ngStyle",4,"ngIf"],["appTeamFallbackImageDirective","","alt","team logo",1,"team-logo",3,"src"],[1,"match-score",3,"ngStyle"],[1,"red-cards"],["class","red-card",4,"ngIf"],[4,"ngIf"],[1,"left"],[1,"status",3,"ngStyle"],[1,"red-card"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e.YNc(3,L,2,5,"span",3),e._UZ(4,"span"),e.TgZ(5,"span"),e._uU(6),e.qZA()(),e._UZ(7,"img",4),e.ALo(8,"teamImage"),e.TgZ(9,"b",5)(10,"span",6),e.YNc(11,b,1,0,"div",7),e.YNc(12,I,1,0,"div",8),e.YNc(13,Q,1,0,"div",7),e.YNc(14,J,1,0,"div",8),e.qZA(),e.TgZ(15,"span"),e._uU(16),e.qZA()(),e._UZ(17,"img",4),e.ALo(18,"teamImage"),e.TgZ(19,"span",9)(20,"span"),e._uU(21),e.qZA()()()()),2&s&&(e.xp6(3),e.Q6J("ngIf",o.getMatchStatus().length),e.xp6(3),e.hij(" ",null==o.match.home?null:o.match.home.name," "),e.xp6(1),e.Q6J("src",e.lcZ(8,11,null==o.match.home?null:o.match.home.id),e.LSH),e.xp6(2),e.Q6J("ngStyle",e.VKq(15,S,null!=o.match.status&&null!=o.match.status.liveTime&&o.match.status.liveTime.short||o.match.status.finished?"white":"#888")),e.xp6(2),e.Q6J("ngIf",null==o.match.status?null:o.match.status.homeRedCards),e.xp6(1),e.Q6J("ngIf",!(null!=o.match.status&&o.match.status.homeRedCards)),e.xp6(1),e.Q6J("ngIf",null==o.match.status?null:o.match.status.awayRedCards),e.xp6(1),e.Q6J("ngIf",!(null!=o.match.status&&o.match.status.awayRedCards)),e.xp6(2),e.Oqu(o.scoreOrTime),e.xp6(1),e.Q6J("src",e.lcZ(18,13,null==o.match.away?null:o.match.away.id),e.LSH),e.xp6(4),e.hij(" ",null==o.match.away?null:o.match.away.name," "))},dependencies:[a.O5,a.PC,O.t,M.P],styles:[".match-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;cursor:pointer;transition:all .2s ease-in-out;width:100%;padding:0rem 1rem}.match-list-item[_ngcontent-%COMP%]:hover{background-color:#222}.match-list-item[_ngcontent-%COMP%]   .wrap-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:1rem 0rem;min-width:max-content;width:100%;gap:.75rem}.match-list-item[_ngcontent-%COMP%]   .wrap-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.2rem;aspect-ratio:1/1;border-radius:50%}.match-list-item[_ngcontent-%COMP%]   .wrap-item[_ngcontent-%COMP%]   .match-score[_ngcontent-%COMP%]{font-size:.8rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.15rem}.match-list-item[_ngcontent-%COMP%]   .wrap-item[_ngcontent-%COMP%]   .match-score[_ngcontent-%COMP%]   .red-cards[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:0 2px}.match-list-item[_ngcontent-%COMP%]   .wrap-item[_ngcontent-%COMP%]   .match-score[_ngcontent-%COMP%]   .red-cards[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]{width:4px;height:6px;border-radius:1px;background-color:#a30d0d}.match-list-item[_ngcontent-%COMP%]   .wrap-item[_ngcontent-%COMP%]   span.left[_ngcontent-%COMP%]{text-align:left;flex:1;font-size:.8rem;font-weight:700}.match-list-item[_ngcontent-%COMP%]   .wrap-item[_ngcontent-%COMP%]   span.right[_ngcontent-%COMP%]{text-align:right;flex:1;font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:space-between;width:100%}.match-list-item[_ngcontent-%COMP%]   .wrap-item[_ngcontent-%COMP%]   span.status[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-width:24px;width:24px;height:20px;padding:10px 6px;font-size:12px;text-align:center;font-weight:700;border-radius:10px;color:#fff;background-color:#00985f}"]})}return t})();function N(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-match-list-item",3),e.BQk()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("match",n)}}function k(t,i){if(1&t&&(e.ynx(0),e.YNc(1,N,2,1,"ng-container",2),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.matches)}}function U(t,i){1&t&&(e.ynx(0),e.TgZ(1,"p",4),e._uU(2,"No Results"),e.qZA(),e.BQk())}let $=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-feed-bytime-matches"]],inputs:{matches:"matches"},decls:3,vars:3,consts:[[3,"padding"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"w-100",3,"match"],[1,"w-100"]],template:function(s,o){1&s&&(e.TgZ(0,"app-wrapper",0),e.YNc(1,k,2,1,"ng-container",1),e.YNc(2,U,3,0,"ng-container",1),e.qZA()),2&s&&(e.Q6J("padding",0),e.xp6(1),e.Q6J("ngIf",o.matches.length>0),e.xp6(1),e.Q6J("ngIf",!o.matches.length))},dependencies:[a.sg,a.O5,m.A,x]})}return t})();const j=function(t){return{selected:t}};let H=(()=>{class t{constructor(){this.onToggled=new e.vpe}toggle(){this.onToggled.emit(this.content)}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-feed-filter-capsule"]],inputs:{content:"content",selected:"selected"},outputs:{onToggled:"onToggled"},decls:3,vars:4,consts:[[1,"filter-capsule",3,"ngClass","click"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.toggle()}),e.TgZ(1,"span"),e._uU(2),e.qZA()()),2&s&&(e.Q6J("ngClass",e.VKq(2,j,o.selected)),e.xp6(2),e.hij(" ",o.content," "))},dependencies:[a.mk],styles:[".filter-capsule[_ngcontent-%COMP%]{margin:auto;border-radius:50px;background-color:#2c2c2c;padding:.5rem .8rem;font-weight:500!important;font-size:.8rem;-webkit-user-select:none;user-select:none;min-width:max-content}@media (max-width: 538px){.filter-capsule[_ngcontent-%COMP%]{font-size:.7rem!important;padding:.3rem}}.filter-capsule[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer;transition:opacity .2s ease-in-out}.filter-capsule[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]{color:#fff;transition:color .2s ease-in-out}.selected[_ngcontent-%COMP%]{background-color:#fff;color:#111}"]})}return t})();var f=r(95),Y=r(5153),q=r(9397);let P=(()=>{class t{constructor(){this.searchText=new e.vpe,this.searchField=new f.NI}ngOnInit(){this.inputSubscription=this.searchField.valueChanges.pipe((0,Y.b)(500),(0,q.b)(n=>{this.searchText.emit(n)})).subscribe()}ngOnDestroy(){this.inputSubscription.unsubscribe()}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-feed-filter-search"]],outputs:{searchText:"searchText"},decls:3,vars:1,consts:[[1,"feed-search"],[1,"fas","fa-filter"],["type","text","placeholder","Search",1,"feed-search__input",3,"formControl"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0),e._UZ(1,"i",1)(2,"input",2),e.qZA()),2&s&&(e.xp6(2),e.Q6J("formControl",o.searchField))},dependencies:[f.Fj,f.JJ,f.oH],styles:[".feed-search[_ngcontent-%COMP%]{margin:auto;border-radius:50px;background-color:#2c2c2c;padding:.5rem .8rem;font-weight:200!important;font-size:.8rem;-webkit-user-select:none;user-select:none;display:flex;flex-direction:row;align-items:center;gap:.5rem}.feed-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;transition:color .2s ease-in-out}.feed-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;background-color:transparent;color:#fff;font-size:.8rem;font-weight:200;width:100%}.feed-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.feed-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::placeholder{color:transparent}"]})}return t})();function B(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"app-feed-filter-capsule",13),e.NdJ("onToggled",function(o){e.CHM(n);const c=e.oxw();return e.KtG(c.onFilterToggle(o))}),e.qZA()}if(2&t){const n=i.$implicit,s=e.oxw();e.Q6J("content",n)("selected",s.selectedFilters.has(n))}}let z=(()=>{class t{constructor(n){this.store=n,this.onFiltersChange=new e.vpe,this.onSearchChange=new e.vpe,this.date="Today",this.selectedFilters=new Set(["All"])}onFilterToggle(n){"All"===n?this.selectedFilters.has("All")?this.selectedFilters.delete("All"):(this.selectedFilters.add("All"),this.selectedFilters.has("Ongoing")&&this.selectedFilters.delete("Ongoing")):"Ongoing"===n?this.selectedFilters.has("Ongoing")?(this.selectedFilters.delete("Ongoing"),this.selectedFilters.has("All")||this.selectedFilters.add("All")):(this.selectedFilters.add("Ongoing"),this.selectedFilters.has("All")&&this.selectedFilters.delete("All")):"By Time"===n&&(this.selectedFilters.has("By Time")?this.selectedFilters.delete("By Time"):this.selectedFilters.add("By Time")),0===this.selectedFilters.size&&this.selectedFilters.add("All"),this.onFiltersChange.emit(this.selectedFilters)}onSearchText(n){this.onSearchChange.emit(n)}onNextDay(){this.selectedFilters.clear(),this.selectedFilters.add("All"),this.store.dispatch(g.ls.loadMatchesNextDay(this.date))}onPrevDay(){this.selectedFilters.clear(),this.selectedFilters.add("All"),this.store.dispatch(g.ls.loadMatchesPrevDay(this.date))}formatDate(n){return n?(0,_.a1)(n):"ez"}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(h.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-filter"]],inputs:{filters:"filters",date:"date"},outputs:{onFiltersChange:"onFiltersChange",onSearchChange:"onSearchChange"},decls:15,vars:2,consts:[[1,"home-filter"],[1,"dates-filter"],[1,"arrow",3,"click"],[1,"fas","fa-chevron-left"],[1,"date-picker"],[1,"date-picker__date"],[1,"date-picker__date__day"],[1,"date-picker__calendar"],[1,"fas","fa-chevron-right"],[1,"hseparator"],[1,"filters"],["class","filter-capsule",3,"content","selected","onToggled",4,"ngFor","ngForOf"],[1,"w-100","feed-search",3,"searchText"],[1,"filter-capsule",3,"content","selected","onToggled"]],template:function(s,o){1&s&&(e.TgZ(0,"app-wrapper",0)(1,"div",1)(2,"div",2),e.NdJ("click",function(){return o.onPrevDay()}),e._UZ(3,"i",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"span",6),e._uU(7),e.qZA()(),e._UZ(8,"div",7),e.qZA(),e.TgZ(9,"div",2),e.NdJ("click",function(){return o.onNextDay()}),e._UZ(10,"i",8),e.qZA()(),e._UZ(11,"div",9),e.TgZ(12,"div",10),e.YNc(13,B,1,2,"app-feed-filter-capsule",11),e.TgZ(14,"app-feed-filter-search",12),e.NdJ("searchText",function(l){return o.onSearchText(l)}),e.qZA()()()),2&s&&(e.xp6(7),e.Oqu(o.formatDate(o.date)),e.xp6(6),e.Q6J("ngForOf",o.filters))},dependencies:[a.sg,m.A,H,P],styles:[".home-filter[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.home-filter[_ngcontent-%COMP%]   .dates-filter[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem;width:100%;border-radius:5px;text-align:start;-webkit-user-select:none;user-select:none}.home-filter[_ngcontent-%COMP%]   .dates-filter[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{cursor:pointer;aspect-ratio:1;border-radius:50%;width:1.9rem;display:flex;justify-content:center;align-items:center;font-size:.7rem;color:#fff;background-color:#777;transition:background-color .2s ease-in-out}.home-filter[_ngcontent-%COMP%]   .dates-filter[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:hover{background-color:#ccc}.home-filter[_ngcontent-%COMP%]   .dates-filter[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;gap:1rem}.home-filter[_ngcontent-%COMP%]   .hseparator[_ngcontent-%COMP%]{height:1px;width:100%;background-color:#777;border:none;margin:1rem 0}.home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:start;align-items:center;gap:1rem;width:100%;border-radius:5px;text-align:start;font-size:.7rem}.home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{cursor:pointer;aspect-ratio:1;border-radius:50%;width:1.9rem;display:flex;justify-content:center;align-items:center;color:#fff;background-color:#777}.home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]:hover, .home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-selected[_ngcontent-%COMP%], .home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-selected[_ngcontent-%COMP%]:hover{background-color:#ccc}.home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-text[_ngcontent-%COMP%]{font-weight:700;color:#777}.home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-text[_ngcontent-%COMP%]:hover{color:#777}@media (max-width: 538px){.home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{justify-content:space-between;font-size:2.5rem!important}.home-filter[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter-capsule[_ngcontent-%COMP%]{text-align:center;flex:1;width:100%}}@media (max-width: 538px){.home-filter[_ngcontent-%COMP%]   .feed-search[_ngcontent-%COMP%]{display:none}}"]})}return t})(),C=(()=>{class t{constructor(n){this.eleRef=n}onError(){this.eleRef.nativeElement.src="https://www.fotmob.com/img/league_fallback.png"}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(e.SBq))};static#t=this.\u0275dir=e.lG2({type:t,selectors:[["","countryFallbackImage",""]],hostBindings:function(s,o){1&s&&e.NdJ("error",function(){return o.onError()})}})}return t})(),T=(()=>{class t{transform(n){return`https://images.fotmob.com/image_resources/logo/teamlogo/${n.toLowerCase()}.png`}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275pipe=e.Yjl({name:"countryImage",type:t,pure:!0})}return t})(),D=(()=>{class t{transform(n){return(0,_.pD)(n)}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275pipe=e.Yjl({name:"ccodeToCountry",type:t,pure:!0})}return t})();function X(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1," - "),e.qZA())}function R(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-match-list-item",5),e.BQk()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("match",n)}}function E(t,i){if(1&t&&(e.ynx(0),e.YNc(1,R,2,1,"ng-container",4),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.league.matches)}}const K=function(t){return["../leagues",t]};let V=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-feed-league-section"]],inputs:{league:"league"},decls:12,vars:15,consts:[[3,"padding"],[1,"league-section-title",3,"routerLink"],["countryFallbackImage","","alt","league logo",1,"league-logo",3,"src"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"w-100",3,"match"]],template:function(s,o){1&s&&(e.TgZ(0,"app-wrapper",0)(1,"a",1),e._UZ(2,"img",2),e.ALo(3,"countryImage"),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"ccodeToCountry"),e.qZA(),e.YNc(7,X,2,0,"span",3),e.ALo(8,"ccodeToCountry"),e.TgZ(9,"span"),e._uU(10),e.qZA()(),e.YNc(11,E,2,1,"ng-container",3),e.qZA()),2&s&&(e.Q6J("padding",0),e.xp6(1),e.Q6J("routerLink",e.VKq(13,K,o.league.id)),e.xp6(1),e.Q6J("src",e.lcZ(3,7,o.league.ccode),e.LSH),e.xp6(3),e.hij(" ",e.lcZ(6,9,o.league.ccode),""),e.xp6(2),e.Q6J("ngIf",e.lcZ(8,11,o.league.ccode)),e.xp6(3),e.Oqu(o.league.name),e.xp6(1),e.Q6J("ngIf",o.league.matches.length>0))},dependencies:[a.sg,a.O5,d.rH,m.A,x,C,T,D],styles:[".league-section-title[_ngcontent-%COMP%]{background-color:#2c2c2c;cursor:pointer;padding:1rem;text-decoration:none;color:#fff;width:100%}.league-section-title[_ngcontent-%COMP%]:hover{opacity:.8}.league-section-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1rem;aspect-ratio:1/1;margin-right:.5rem;background-color:#eee;object-fit:cover;border-radius:50%}"]})}return t})();function W(t,i){1&t&&e._UZ(0,"app-feed-league-section",4),2&t&&e.Q6J("league",i.$implicit)}function G(t,i){if(1&t&&(e.ynx(0),e.YNc(1,W,1,1,"app-feed-league-section",3),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.leagueMatches$).leagues)}}function ee(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-feed-bytime-matches",5),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("matches",e.lcZ(2,1,n.byTimeMatches$))}}function te(t,i){1&t&&(e.ynx(0),e.TgZ(1,"app-wrapper",6),e._UZ(2,"app-loading",6),e.qZA(),e.BQk())}let ne=(()=>{class t{constructor(n){this.store=n,this.leagueMatches$=this.store.select(p.O8),this.byTimeMatches$=this.store.select(p.WR),this.matchesStatus$=this.store.select(p.xJ),this.date$=this.store.select(p.hj),this.filters=new Set(["All","Ongoing","By Time"]),this.selectedFilters=this.filters,this.searchQuery=""}onFiltersChange(n){this.selectedFilters=n,this.store.dispatch(g.ls.filterMatches(this.selectedFilters,this.searchQuery))}onSearchChange(n){this.searchQuery=n,this.store.dispatch(g.ls.filterMatches(this.selectedFilters,this.searchQuery))}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(h.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-feed"]],decls:12,vars:19,consts:[[1,"home-feed"],[1,"w-100",3,"filters","date","onFiltersChange","onSearchChange"],[4,"ngIf"],["class","w-100",3,"league",4,"ngFor","ngForOf"],[1,"w-100",3,"league"],[1,"w-100",3,"matches"],[1,"w-100"]],template:function(s,o){if(1&s&&(e.TgZ(0,"div",0)(1,"app-home-filter",1),e.NdJ("onFiltersChange",function(l){return o.onFiltersChange(l)})("onSearchChange",function(l){return o.onSearchChange(l)}),e.ALo(2,"async"),e.qZA(),e.YNc(3,G,3,3,"ng-container",2),e.ALo(4,"async"),e.ALo(5,"async"),e.ALo(6,"async"),e.YNc(7,ee,3,3,"ng-container",2),e.ALo(8,"async"),e.ALo(9,"async"),e.YNc(10,te,3,0,"ng-container",2),e.ALo(11,"async"),e.qZA()),2&s){let c,l,F;e.xp6(1),e.Q6J("filters",o.filters)("date",null!==(c=e.lcZ(2,5,o.date$))&&void 0!==c?c:"Today"),e.xp6(2),e.Q6J("ngIf","Loading"!=e.lcZ(4,7,o.matchesStatus$)&&!(null!=(l=e.lcZ(5,9,o.byTimeMatches$))&&l.length)&&(null==(l=e.lcZ(6,11,o.leagueMatches$))||null==l.leagues?null:l.leagues.length)),e.xp6(4),e.Q6J("ngIf","Loading"!=e.lcZ(8,13,o.matchesStatus$)&&(null==(F=e.lcZ(9,15,o.byTimeMatches$))?null:F.length)),e.xp6(3),e.Q6J("ngIf","Loading"==e.lcZ(11,17,o.matchesStatus$))}},dependencies:[a.sg,a.O5,m.A,w.N,$,z,V,a.Ov],styles:[".home-feed[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}"]})}return t})();var oe=r(3433),se=r(3135),ie=r(3475),ae=r(3163);function re(t,i){if(1&t&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",null==n.transferInfo.fee?null:n.transferInfo.fee.value," ")}}function ce(t,i){if(1&t&&(e.TgZ(0,"span",11),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,(null==n.transferInfo.fee?null:n.transferInfo.fee.feeText)||"On Loan")," ")}}let le=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-transfer-card"]],inputs:{transferInfo:"transferInfo"},decls:17,vars:12,consts:[[1,"transfer-card","w-100"],[1,"details"],["appPlayerFallbackImage","","alt","player image",1,"player-img",3,"src"],[1,"coll"],[1,"roww"],[1,"name"],["appTeamFallbackImageDirective","","alt","fromImg",1,"from",3,"src"],[1,"center","row"],["alt","toImg","appTeamFallbackImageDirective","",1,"to",3,"src"],[1,"price"],["class","price__text",4,"ngIf"],[1,"price__text"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.ALo(3,"playerImage"),e.TgZ(4,"div",3)(5,"div",4)(6,"p",5),e._uU(7),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"img",6),e.ALo(10,"teamImage"),e._UZ(11,"app-arrow-right-solid",7)(12,"img",8),e.ALo(13,"teamImage"),e.qZA()()(),e.TgZ(14,"div",9),e.YNc(15,re,2,1,"span",10),e.YNc(16,ce,3,3,"span",10),e.qZA()()),2&s&&(e.xp6(2),e.Q6J("src",e.lcZ(3,6,o.transferInfo.playerId),e.LSH),e.xp6(5),e.Oqu(o.transferInfo.name),e.xp6(2),e.Q6J("src",e.lcZ(10,8,o.transferInfo.fromClubId),e.LSH),e.xp6(3),e.Q6J("src",e.lcZ(13,10,o.transferInfo.toClubId),e.LSH),e.xp6(3),e.Q6J("ngIf","fee"==(null==o.transferInfo.fee?null:o.transferInfo.fee.feeText)),e.xp6(1),e.Q6J("ngIf","fee"!=(null==o.transferInfo.fee?null:o.transferInfo.fee.feeText)))},dependencies:[a.O5,se.d,ie.L,O.t,a.rS,ae.t,M.P],styles:[".transfer-card[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;align-items:center;justify-content:space-between;cursor:pointer;transition:all .2s ease-in-out}.transfer-card[_ngcontent-%COMP%]:hover{transform:scale(1.02);box-shadow:0 0 10px #0000003d}.transfer-card[_ngcontent-%COMP%]   .price__text[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;margin:0;margin-left:.5rem;margin-bottom:.2rem}.transfer-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:start}.transfer-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:700;font-size:.8rem;margin-bottom:.2rem}.transfer-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .player-img[_ngcontent-%COMP%]{width:3rem;height:3rem;border-radius:50%;margin-right:1rem;background-color:#cccccc3c}.transfer-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .coll[_ngcontent-%COMP%]{display:flex;flex-direction:column}.transfer-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:start;gap:.5rem}.transfer-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22px;height:22px;border-radius:50%}"]})}return t})();function pe(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-transfer-card",9)(2,"div",5),e.BQk()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("transferInfo",n)}}const Z=function(){return["../transfers"]};let ge=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-top-transfers"]],inputs:{transfers:"transfers"},decls:15,vars:5,consts:[[1,"top-transfers","w-100"],[1,"header","w-100",3,"routerLink"],[1,"header__text"],[1,"bydate"],[1,"header__icon"],[1,"hsep"],[4,"ngFor","ngForOf"],[1,"footer"],[3,"routerLink"],[1,"w-100",3,"transferInfo"]],template:function(s,o){1&s&&(e.TgZ(0,"app-wrapper")(1,"div",0)(2,"a",1)(3,"div",2)(4,"p"),e._uU(5,"Top transfers"),e.qZA(),e.TgZ(6,"p",3),e._uU(7,"By date"),e.qZA()(),e.TgZ(8,"div",4),e._UZ(9,"app-transfer-icon"),e.qZA()(),e._UZ(10,"div",5),e.YNc(11,pe,3,1,"ng-container",6),e.TgZ(12,"div",7)(13,"a",8),e._uU(14,"Transfer center"),e.qZA()()()()),2&s&&(e.xp6(2),e.Q6J("routerLink",e.DdM(3,Z)),e.xp6(9),e.Q6J("ngForOf",o.transfers),e.xp6(2),e.Q6J("routerLink",e.DdM(4,Z)))},dependencies:[a.sg,d.rH,m.A,oe.F,le],styles:[".top-transfers[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:start;-webkit-user-select:none;user-select:none}.top-transfers[_ngcontent-%COMP%]   .hsep[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#cccccc54;margin:1rem 0}.top-transfers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{transition:all .2s ease-in-out;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;align-items:center;text-decoration:none;color:#fff}.top-transfers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]:hover{opacity:.7}.top-transfers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:600;margin-right:1rem}.top-transfers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .bydate[_ngcontent-%COMP%]{color:gray}.top-transfers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__icon[_ngcontent-%COMP%]{padding:.5rem;border:1px solid rgba(204,204,204,.2352941176);border-radius:50%}.top-transfers[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{cursor:pointer;width:100%;text-align:center;transition:all .2s ease-in-out}.top-transfers[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]:hover{opacity:.7}.top-transfers[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-weight:bolder}"]})}return t})(),me=(()=>{class t{constructor(){this.vertical=!1,this.style={display:"flex",flexDirection:"row",justifyContent:"start",gap:".5rem"},this.imgStyle={width:"5rem",height:"5rem","aspect-ratio":"1/1",objectFit:"cover",borderRadius:"1rem"}}ngOnInit(){this.vertical&&(this.style.flexDirection="column",this.imgStyle.width="100%",this.imgStyle.height="auto",this.imgStyle["aspect-ratio"]="16/9")}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-news-card"]],inputs:{myNew:"myNew",vertical:"vertical"},decls:8,vars:10,consts:[["target","_blank",1,"home-news-card",3,"ngStyle","href"],[3,"src","ngStyle","alt"],[1,"news-content"],[1,"news-title"],[1,"news-date"]],template:function(s,o){1&s&&(e.TgZ(0,"a",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"div",3),e._uU(4),e.qZA(),e.TgZ(5,"div",4),e._uU(6),e.ALo(7,"date"),e.qZA()()()),2&s&&(e.Q6J("ngStyle",o.style)("href","https://fotmob.com/"+(null==o.myNew.page?null:o.myNew.page.url),e.LSH),e.xp6(1),e.Q6J("src",o.myNew.imageUrl,e.LSH)("ngStyle",o.imgStyle)("alt",o.myNew.sourceStr),e.xp6(3),e.hij(" ",o.myNew.title," "),e.xp6(2),e.hij(" ",e.xi3(7,7,o.myNew.gmtTime,"d MMM YYY")," "))},dependencies:[a.PC,a.uU],styles:[".home-news-card[_ngcontent-%COMP%]{text-decoration:none}.home-news-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:all .2s ease-in-out}.home-news-card[_ngcontent-%COMP%]:hover{cursor:pointer}.home-news-card[_ngcontent-%COMP%]:hover   .news-title[_ngcontent-%COMP%]{text-decoration:underline}.home-news-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.8}.home-news-card[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]{font-weight:700;font-size:.8rem}.home-news-card[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .news-title[_ngcontent-%COMP%]{margin-bottom:.5rem;max-height:3.6rem;overflow:hidden;color:#fff}.home-news-card[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .news-date[_ngcontent-%COMP%]{font-weight:400;font-size:.7rem;color:#888}"]})}return t})();function ue(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-home-news-card",4)(2,"div",5),e.BQk()),2&t){const n=i.$implicit,s=i.index;e.xp6(1),e.Q6J("myNew",n)("vertical",0===s)}}const de=function(){return["/news"]};let fe=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-last-news"]],inputs:{news:["lastNews","news"]},decls:7,vars:3,consts:[[1,"last-news-container"],[1,"mb-3"],[4,"ngFor","ngForOf"],[1,"all-news",3,"routerLink"],[3,"myNew","vertical"],[1,"hsep"]],template:function(s,o){1&s&&(e.TgZ(0,"app-wrapper")(1,"div",0)(2,"b",1),e._uU(3," News "),e.qZA(),e.YNc(4,ue,3,2,"ng-container",2),e.TgZ(5,"a",3),e._uU(6,"All News"),e.qZA()()()),2&s&&(e.xp6(4),e.Q6J("ngForOf",o.news),e.xp6(1),e.Q6J("routerLink",e.DdM(2,de)))},dependencies:[a.sg,d.rH,m.A,me],styles:[".last-news-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.last-news-container[_ngcontent-%COMP%]   .hsep[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#cccccc54;margin:1rem 0}.last-news-container[_ngcontent-%COMP%]   .all-news[_ngcontent-%COMP%]{padding:.5rem 0;width:100%;text-align:center;color:#fff;font-weight:700;font-size:.8rem}"]})}return t})();var he=r(613);const _e=function(t){return["../leagues",t]};let v=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-league-item"]],inputs:{league:"league"},decls:5,vars:7,consts:[[1,"league-item",3,"routerLink"],["countryFallbackImage","","alt","league logo",1,"league-logo",3,"src"],[1,"league-name"]],template:function(s,o){1&s&&(e.TgZ(0,"a",0),e._UZ(1,"img",1),e.ALo(2,"leagueImage"),e.TgZ(3,"p",2),e._uU(4),e.qZA()()),2&s&&(e.Q6J("routerLink",e.VKq(5,_e,o.league.id)),e.xp6(1),e.Q6J("src",e.lcZ(2,3,o.league.id),e.LSH),e.xp6(3),e.Oqu(o.league.name))},dependencies:[d.rH,C,he.F],styles:[".league-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem;width:100%;border-radius:5px;padding:.5rem;text-align:start;-webkit-user-select:none;user-select:none;text-decoration:none}.league-item[_ngcontent-%COMP%]   .league-logo[_ngcontent-%COMP%]{margin-left:.5rem;aspect-ratio:1/1;width:1.2rem;object-fit:cover;border-radius:50%}.league-item[_ngcontent-%COMP%]   .league-name[_ngcontent-%COMP%]{color:#eee;font-size:.8rem;font-weight:700;width:100%;margin:.2rem}.league-item[_ngcontent-%COMP%]:hover{background-color:#2c2c2c;cursor:pointer}"]})}return t})();function Ce(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-league-item",2),e.BQk()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("league",n)}}let ye=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-top-leagues"]],inputs:{leagues:"leagues"},decls:4,vars:1,consts:[[1,"top-leagues-title"],[4,"ngFor","ngForOf"],[1,"w-100",3,"league"]],template:function(s,o){1&s&&(e.TgZ(0,"app-wrapper")(1,"p",0),e._uU(2,"Top Leagues"),e.qZA(),e.YNc(3,Ce,2,1,"ng-container",1),e.qZA()),2&s&&(e.xp6(3),e.Q6J("ngForOf",o.leagues))},dependencies:[a.sg,m.A,v],styles:[".top-leagues-title[_ngcontent-%COMP%]{font-weight:700}"]})}return t})();var u=r(6825);const we=(0,u.X$)("inOutAnimation",[(0,u.eR)(":enter",[(0,u.oB)({height:0,opacity:0,overflow:"hidden"}),(0,u.jt)("100ms ease-in-out",(0,u.oB)({height:"*",opacity:1,overflow:"visible"}))]),(0,u.eR)(":leave",[(0,u.oB)({height:"*",opacity:1,overflow:"visible"}),(0,u.jt)("100ms ease-in-out",(0,u.oB)({height:0,opacity:0,overflow:"hidden"}))])]);function Oe(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-league-item",9),e.BQk()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("league",n)}}function Me(t,i){if(1&t&&(e.O4$(),e.kcU(),e.TgZ(0,"div"),e.YNc(1,Oe,2,1,"ng-container",8),e.qZA()),2&t){const n=e.oxw();e.Q6J("@inOutAnimation",void 0),e.xp6(1),e.Q6J("ngForOf",n.country.leagues)}}let xe=(()=>{class t{constructor(){this.isOpen=!1}onItemClick(){this.isOpen=!this.isOpen}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-league-per-country-list"]],inputs:{country:"country",isOpen:"isOpen"},decls:10,vars:7,consts:[[1,"country-item",3,"click"],["countryFallbackImage","","alt","country logo",1,"country-logo",3,"src"],[1,"country-name-container"],[1,"country-name"],["xmlns","http://www.w3.org/2000/svg","width","15","height","15","viewBox","0 0 15 15"],["fill","none","d","M15 0H0v15h15z"],["d","M.3 1.71L2.886 4.3a1 1 0 0 0 1.41 0l2.59-2.59A1 1 0 0 0 6.176 0H1a1 1 0 0 0-.7 1.71z"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"w-100",3,"league"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.onItemClick()}),e._UZ(1,"img",1),e.ALo(2,"countryImage"),e.TgZ(3,"div",2)(4,"p",3),e._uU(5),e.qZA(),e.O4$(),e.TgZ(6,"svg",4),e._UZ(7,"path",5)(8,"path",6),e.qZA()()(),e.YNc(9,Me,2,2,"div",7)),2&s&&(e.xp6(1),e.Q6J("src",e.lcZ(2,5,o.country.ccode),e.LSH),e.xp6(4),e.Oqu(o.country.name),e.xp6(3),e.uIk("transform",o.isOpen?"rotate(180 3.5 3)":null)("fill",o.isOpen?"white":"gray"),e.xp6(1),e.Q6J("ngIf",o.isOpen))},dependencies:[a.sg,a.O5,C,v,T],styles:[".test[_ngcontent-%COMP%]{transition:show}.country-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem;width:100%;border-radius:5px;padding:.5rem;text-align:start;-webkit-user-select:none;user-select:none}.country-item[_ngcontent-%COMP%]   .country-logo[_ngcontent-%COMP%]{aspect-ratio:1/1;width:1.5rem;object-fit:cover;border-radius:50%;background-color:#eee}.country-item[_ngcontent-%COMP%]   .country-name-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.country-item[_ngcontent-%COMP%]   .country-name-container[_ngcontent-%COMP%]   .country-name[_ngcontent-%COMP%]{color:#eee;font-size:.8rem;font-weight:700;width:100%;margin:.2rem}.country-item[_ngcontent-%COMP%]:hover{background-color:#2c2c2c;cursor:pointer}"],data:{animation:[we]}})}return t})();function Pe(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"app-league-per-country-list",3),e.BQk()),2&t){const n=i.$implicit,s=e.oxw();e.xp6(1),e.Q6J("isOpen",s.openAll)("country",n)}}let Te=(()=>{class t{constructor(n){this.store=n,this.openAll=!1}onSearchText(n){this.openAll=""!=n,this.store.dispatch(g.iX.searchAllLeagues(n))}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(h.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-all-leagues"]],inputs:{countries:"countries"},decls:7,vars:1,consts:[[1,"w-100",3,"searchText"],[1,"w-100","mt-3"],[4,"ngFor","ngForOf"],[1,"w-100",3,"isOpen","country"]],template:function(s,o){1&s&&(e.TgZ(0,"app-wrapper")(1,"p")(2,"b"),e._uU(3,"All Leagues"),e.qZA()(),e.TgZ(4,"app-feed-filter-search",0),e.NdJ("searchText",function(l){return o.onSearchText(l)}),e.qZA(),e.TgZ(5,"div",1),e.YNc(6,Pe,2,2,"ng-container",2),e.qZA()()),2&s&&(e.xp6(6),e.Q6J("ngForOf",o.countries))},dependencies:[a.sg,m.A,xe,P],styles:[".leagues-container[_ngcontent-%COMP%]{margin-top:1rem}"]})}return t})();function Ze(t,i){if(1&t&&(e._UZ(0,"app-top-leagues",9),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("leagues",e.lcZ(1,1,n.topLeaguesList$))}}function ve(t,i){1&t&&(e.TgZ(0,"app-wrapper",10),e._UZ(1,"app-loading",10),e.qZA())}function Fe(t,i){if(1&t&&(e._UZ(0,"app-all-leagues",11),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("countries",e.lcZ(1,1,n.allLeaguesList$))}}function Ae(t,i){1&t&&(e.TgZ(0,"app-wrapper",10),e._UZ(1,"app-loading",10),e.qZA())}function Le(t,i){if(1&t&&(e._UZ(0,"app-top-transfers",12),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("transfers",e.lcZ(1,1,n.topTransfersList$).slice(0,4))}}function be(t,i){1&t&&(e.TgZ(0,"app-wrapper",10),e._UZ(1,"app-loading",10),e.qZA())}function Ie(t,i){if(1&t&&(e._UZ(0,"app-last-news",13),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("lastNews",e.lcZ(1,1,n.newsList$).slice(0,4))}}function Qe(t,i){1&t&&(e.TgZ(0,"app-wrapper",10),e._UZ(1,"app-loading",10),e.qZA())}const Je=[{path:"",component:(()=>{class t{constructor(n){this.store=n,this.newsList$=this.store.select(p.HW),this.newsStatus$=this.store.select(p.Ng),this.topLeaguesList$=this.store.select(p.jL),this.topLeaguesStatus$=this.store.select(p.XE),this.allLeaguesList$=this.store.select(p.DX),this.allLeaguesStatus$=this.store.select(p.S$),this.topTransfersList$=this.store.select(p.qE),this.topTransfersStatus$=this.store.select(p.s2)}ngOnInit(){this.store.dispatch(g.Kj.loadNews()),this.store.dispatch(g.NW.loadTopLeagues()),this.store.dispatch(g.iX.loadAllLeagues()),this.store.dispatch(g.dA.loadTransfers({showTop:!0})),this.store.dispatch(g.ls.loadMatches({date:(0,_.ku)("Today")}))}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(h.yh))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:20,vars:24,consts:[[1,"home"],[1,"side-home","side-left"],["class","w-100",3,"leagues",4,"ngIf"],["class","w-100",4,"ngIf"],["class","w-100",3,"countries",4,"ngIf"],[1,"w-100",".main-home"],[1,"side-home","side-right"],["class","w-100",3,"transfers",4,"ngIf"],["class","w-100",3,"lastNews",4,"ngIf"],[1,"w-100",3,"leagues"],[1,"w-100"],[1,"w-100",3,"countries"],[1,"w-100",3,"transfers"],[1,"w-100",3,"lastNews"]],template:function(s,o){1&s&&(e.TgZ(0,"main",0)(1,"div",1),e.YNc(2,Ze,2,3,"app-top-leagues",2),e.ALo(3,"async"),e.YNc(4,ve,2,0,"app-wrapper",3),e.ALo(5,"async"),e.YNc(6,Fe,2,3,"app-all-leagues",4),e.ALo(7,"async"),e.YNc(8,Ae,2,0,"app-wrapper",3),e.ALo(9,"async"),e.qZA(),e._UZ(10,"app-feed",5),e.TgZ(11,"div",6),e.YNc(12,Le,2,3,"app-top-transfers",7),e.ALo(13,"async"),e.YNc(14,be,2,0,"app-wrapper",3),e.ALo(15,"async"),e.YNc(16,Ie,2,3,"app-last-news",8),e.ALo(17,"async"),e.YNc(18,Qe,2,0,"app-wrapper",3),e.ALo(19,"async"),e.qZA()()),2&s&&(e.xp6(2),e.Q6J("ngIf","Success"==e.lcZ(3,8,o.topLeaguesStatus$)),e.xp6(2),e.Q6J("ngIf","Loading"==e.lcZ(5,10,o.topLeaguesStatus$)),e.xp6(2),e.Q6J("ngIf","Success"==e.lcZ(7,12,o.allLeaguesStatus$)),e.xp6(2),e.Q6J("ngIf","Loading"==e.lcZ(9,14,o.allLeaguesStatus$)),e.xp6(4),e.Q6J("ngIf","Success"==e.lcZ(13,16,o.topTransfersStatus$)),e.xp6(2),e.Q6J("ngIf","Loading"==e.lcZ(15,18,o.topTransfersStatus$)),e.xp6(2),e.Q6J("ngIf","Success"==e.lcZ(17,20,o.newsStatus$)),e.xp6(2),e.Q6J("ngIf","Loading"==e.lcZ(19,22,o.newsStatus$)))},dependencies:[a.O5,m.A,w.N,ne,ge,fe,ye,Te,a.Ov],styles:[".home[_ngcontent-%COMP%]{max-width:1300px;width:100%;margin:1rem auto;border-radius:1rem;display:grid;grid-template-columns:300px 1fr 300px;grid-gap:1rem}@media (max-width: 1000px){.home[_ngcontent-%COMP%]{display:flex}}@media (max-width: 1300px){.home[_ngcontent-%COMP%]{grid-template-columns:300px 1fr}}.home[_ngcontent-%COMP%]   .side-home[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .main-home[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;justify-content:start;gap:1rem}@media (max-width: 1000px){.home[_ngcontent-%COMP%]   .side-left[_ngcontent-%COMP%]{display:none}}@media (max-width: 1300px){.home[_ngcontent-%COMP%]   .side-right[_ngcontent-%COMP%]{display:none}}"]})}return t})()}];let Se=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(Je),d.Bz]})}return t})();var Ne=r(6208);let ke=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[a.ez,Se,Ne.m,f.u5,f.UX]})}return t})()}}]);
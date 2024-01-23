import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './views/wrapper/wrapper.component';
import { SearchbarComponent } from './views/searchbar/searchbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WrapperComponent, SearchbarComponent],
  exports: [WrapperComponent, SearchbarComponent, CommonModule],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './views/wrapper/wrapper.component';
import { SearchbarComponent } from './views/searchbar/searchbar.component';
import { TransferIconComponent } from './views/transfer-icon/transfer-icon.component';
import { ArrowRightSolidComponent } from './views/arrow-right-solid/arrow-right-solid.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WrapperComponent,
    SearchbarComponent,
    TransferIconComponent,
    ArrowRightSolidComponent,
  ],
  exports: [
    WrapperComponent,
    SearchbarComponent,
    TransferIconComponent,
    CommonModule,
    ArrowRightSolidComponent,
  ],
})
export class SharedModule {}

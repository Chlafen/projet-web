import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './views/wrapper/wrapper.component';
import { SearchbarComponent } from './views/searchbar/searchbar.component';
import { TransferIconComponent } from './views/transfer-icon/transfer-icon.component';
import { ArrowRightSolidComponent } from './views/arrow-right-solid/arrow-right-solid.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    WrapperComponent,
    SearchbarComponent,
    TransferIconComponent,
    ArrowRightSolidComponent,
  ],
  exports: [
    FormsModule,
    WrapperComponent,
    SearchbarComponent,
    TransferIconComponent,
    CommonModule,
    ArrowRightSolidComponent,
  ],
})
export class SharedModule {}

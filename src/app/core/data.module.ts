import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// provides mock backend for easy frontend testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  exports: [HttpClientModule],
})
export class DataModule {}

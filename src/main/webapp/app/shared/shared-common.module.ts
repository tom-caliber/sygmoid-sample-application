import { NgModule } from '@angular/core';

import { SygmoidApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SygmoidApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SygmoidApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SygmoidApplicationSharedCommonModule {}

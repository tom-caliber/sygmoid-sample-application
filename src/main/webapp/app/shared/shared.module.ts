import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  SygmoidApplicationSharedLibsModule,
  SygmoidApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [SygmoidApplicationSharedLibsModule, SygmoidApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SygmoidApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SygmoidApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: SygmoidApplicationSharedModule
    };
  }
}

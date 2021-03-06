import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SubHeaderModule } from '../_modules/sub-header/sub-header.module';

/** MODULES */
import { SocialModule } from '../_modules/social/social.module';

/** COMPONENTS */
import { SetupComponent } from './setup.component';


@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubHeaderModule,
    SocialModule,
    RouterModule.forChild([
      {
        path: '',
        component: SetupComponent
      }
    ])
  ],
  // providers: [ChargeSocketService]
})
export class SetupModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
    {
        path: '',
        component: SignInComponent
    }
];

@NgModule({
  declarations: [SignInComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCheckboxModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        FlexModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class AuthenticationModule { }

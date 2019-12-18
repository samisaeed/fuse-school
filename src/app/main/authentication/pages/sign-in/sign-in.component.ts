import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {navigation} from '../../../../navigation/navigation';
import {FuseNavigationService} from '../../../../../@fuse/components/navigation/navigation.service';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SignInComponent implements OnInit {


    loginForm: FormGroup;
    navigation: any;
    private _verifying: boolean;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param _authService
     * @param _menuService
     * @param _fuseNavigationService
     * @param _snackBar
     * @param _router
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _authService: AuthService,
        private _fuseNavigationService: FuseNavigationService,
        private _snackBar: MatSnackBar,
        private _router: Router,
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            name: ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }

    onFormSubmit({value: {username, password}}): void {
        this._verifying = true;

        this._authService.signIn(username, password).subscribe(({data}) => {
            const payload = JSON.parse(atob(data.access_token.original.access_token.split('.')[1]));
            this._verifying = false;
            this._authService.setAuthInfoInLocalStorage(data.access_token, payload);

            this._router.navigate(['/dashboard']);
        }, error => {
            this.openSnackBar(error.statusText);
            this._verifying = false;
            this.loginForm.reset();
        });
    }

    openSnackBar(message): void {
        this._snackBar.open(message, 'close', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
        });
    }

}

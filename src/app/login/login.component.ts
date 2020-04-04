import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from '../shared/services/provider-service.service';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private providerService: ProviderServiceService,
        private userService: UserServiceService,
        private router: Router
    ) {
        this.initForm();
    }

    public usersRoles: Array<any> = [
        'doctor',
        'nurse',
        'admin'
    ];

    ngOnInit(): void {
        if (this.userService.isLoggedIn()) {
            this.router.navigate(['/users']);
        }
    }

    initForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    get email() { return this.loginForm.get('email'); }

    get password() { return this.loginForm.get('password'); }

    onLogin() {
        console.log('submitted');
        if (!this.loginForm.valid) {
            return;
        }
        // API CALL for Login
        this.providerService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
            .subscribe(data => {
                if (!data.Status) {
                    this.userService.setAccessToken(data.Result.loginToken);
                    this.userService.setUserRole(data.Result.roles);
                    this.userService.setCurrentUserData(data.Result);
                    this.router.navigate(['/users']);
                } else {
                    alert(data.Message);
                }
            });
    }

}

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder
    ) {
        this.initForm();
    }

    public usersRoles: Array<any> = [
        'doctor',
        'nurse',
        'admin'
    ];

    ngOnInit(): void {
    }

    initForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required, Validators.email],
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
        // this.applyLogin(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }

}

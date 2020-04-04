import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    usersRoles: [
        'doctor',
        'nurse',
        'admin'
    ];

    constructor(
        private fb: FormBuilder
    ) {
        this.initForm();
    }


    ngOnInit(): void {
    }

    initForm() {
        this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required, Validators.email],
            password: ['', Validators.required],
            role: ['', Validators.required],
        });
    }

    get firstName() { return this.registerForm.get('firstName'); }

    get lastName() { return this.registerForm.get('lastName'); }

    get email() { return this.registerForm.get('email'); }

    get password() { return this.registerForm.get('password'); }

    get role() { return this.registerForm.get('role'); }

    onRegister() {
        console.log('submitted');
        if (!this.registerForm.valid) {
            return;
        }
        // API CALL
        // this.applyLogin(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }

}

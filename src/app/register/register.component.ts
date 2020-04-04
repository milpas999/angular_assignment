import { Router } from '@angular/router';
import { ProviderServiceService } from './../shared/services/provider-service.service';
import { UserServiceService } from './../shared/services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;


    public usersRoles: Array<any> = [
        'doctor',
        'nurse',
        'admin'
    ];

    constructor(
        private fb: FormBuilder,
        private providerService: ProviderServiceService,
        private userService: UserServiceService,
        private router: Router
    ) {
        this.initForm();
    }


    ngOnInit(): void {
        if (this.userService.isLoggedIn()) {
            this.router.navigate(['/users']);
        }
    }

    initForm() {
        this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
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
        this.providerService.register(
            this.registerForm.get('firstName').value,
            this.registerForm.get('lastName').value,
            this.registerForm.get('email').value,
            this.registerForm.get('password').value,
            this.registerForm.get('role').value,
        ).subscribe(data => {
            if (!data.Status) {
                this.router.navigate(['/users']);
            } else {
                alert(data.Message);
            }
        });
    }

}

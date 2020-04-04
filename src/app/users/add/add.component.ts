import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProviderServiceService } from '../../shared/services/provider-service.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    addUserForm: FormGroup;


    public usersRoles: Array<any> = [
        'doctor',
        'nurse',
        'admin'
    ];

    constructor(
        private fb: FormBuilder,
        private providerService: ProviderServiceService,
        private router: Router
    ) {
        this.initForm();
    }

    ngOnInit(): void {
    }

    initForm() {
        this.addUserForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            role: ['', Validators.required],
        });
    }

    get firstName() { return this.addUserForm.get('firstName'); }

    get lastName() { return this.addUserForm.get('lastName'); }

    get email() { return this.addUserForm.get('email'); }

    get password() { return this.addUserForm.get('password'); }

    get role() { return this.addUserForm.get('role'); }

    onAddUser() {
        console.log('submitted');
        if (!this.addUserForm.valid) {
            return;
        }
        this.providerService.addUser(
            this.addUserForm.get('firstName').value,
            this.addUserForm.get('lastName').value,
            this.addUserForm.get('email').value,
            this.addUserForm.get('password').value,
            this.addUserForm.get('role').value,
        ).subscribe(data => {
            if (!data.Status) {
                this.router.navigate(['/users']);
            } else {
                alert(data.Message);
            }
        });
    }

}

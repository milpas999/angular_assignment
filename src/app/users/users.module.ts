import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ListingComponent } from './listing/listing.component';
import { AddComponent } from './add/add.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
    declarations: [ListingComponent, AddComponent],
    imports: [
        RouterModule,
        CommonModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSliderModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class UsersModule { }

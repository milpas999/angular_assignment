import { ProviderServiceService } from './../../shared/services/provider-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
    public userListing: Array<any> = [];
    displayedColumns: string[] = ['firstName', 'lastName', 'email'];
    dataSource = new MatTableDataSource(this.userListing);
    length: number = this.userListing.length;

    @ViewChild(MatTable) table: MatTable<any>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(
        private providerService: ProviderServiceService
    ) { }

    ngOnInit(): void {
        this.providerService.getUserListing()
            .subscribe(data => {
                if (!data.Status) {
                    this.dataSource = new MatTableDataSource(data.Result);
                    this.length = data.Result.length;
                    this.table.renderRows();
                    this.dataSource.paginator = this.paginator;
                } else {
                    alert(data.Message);
                }
            });
    }
}

export interface PeriodicElement {
    firstName: string;
    lastname: string;
    email: string;
}

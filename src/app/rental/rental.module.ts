import { NgModule } from '@angular/core';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component'
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { RentalService } from './shared/rental.service';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'rentals',
    component : RentalComponent,
    children : [
        {path: '', component : RentalListItemComponent},
        {path : ':rentalId', component: RentalDetailsComponent}
    ]
}]
@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailsComponent
      ],
    imports : [CommonModule,
        RouterModule.forChild(routes)
    ],
    providers : [RentalService]
})

export class RentalModule {
   
}
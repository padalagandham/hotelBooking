import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.css']
})
export class RentalListItemComponent implements OnInit {
  rentals: Rental [];
  
  constructor(private rentalService : RentalService) { }

  ngOnInit() {
     const rentalObservble = this.rentalService.getRentals();
        rentalObservble.subscribe((rentals)=>{
          this.rentals = rentals;
        });
    }
}

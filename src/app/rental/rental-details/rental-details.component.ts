import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service'
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent implements OnInit {
  currentId : number;
  rentalObj : Rental;
  constructor(private route : ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
     
    this.route.params.subscribe((params) => {
      this.currentId = params.rentalId;
      this.getProductData();
    });
  }

  getProductData(){
      this.rentalService.getRentalById(this.currentId).subscribe((rentalObj)=> {
        debugger;
        this.rentalObj = rentalObj;
      });
  }

}

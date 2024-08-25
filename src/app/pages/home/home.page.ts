import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Ensure Router is imported correctly

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { } // Corrected the syntax here

  ngOnInit() {
  }

  goToPickupCalls() {
    this.router.navigate(['pickup-calls']);
  }

  goToPickupCall() {
    this.router.navigate(['pickup-call']);
  }

}

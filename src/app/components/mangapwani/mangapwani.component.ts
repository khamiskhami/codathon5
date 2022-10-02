import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangapwani',
  templateUrl: './mangapwani.component.html',
  styleUrls: ['./mangapwani.component.css']
})
export class MangapwaniComponent implements OnInit {
  title="Mangapwani Slave Chamber in Zanzibar";
  longText = `The Mangapwani Slave Chamber is ~20 kms north of Stone Town and 2 kms up the coast from the Mangapwani Coral Cavern.  The Slave Chamber is a square underground cell that was cut out of the coralline rock, with a roof on top.  The chamber was originally built by Mohammed bin Nassor Al-Alwi, a prosperous slave trader, to store his slaves.  Boats from Bagamoyo on the Tanzania mainland would unload their human cargo on a secluded beach, separated from the main Mangapwani Beach by coral-rock outcrops.  The dirt path from the beach to the Slave Chamber still exists today.
  Mohammed bin Nassor would keep his slaves here until it was time to take them into Zanzibar Town for sale at the Slave Market.  Many historians believe that even after Sultan Barghash signed the Anglo–Zanzibari treaty which officially abolished the slave trade in 1873, the cave was still used as a place to hide slaves, as the slave trade continued illegally for many years.    
  `;

  constructor() { }

  ngOnInit(): void {
  }

}

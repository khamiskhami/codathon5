import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maruhubi',
  templateUrl: './maruhubi.component.html',
  styleUrls: ['./maruhubi.component.css']
})
export class MaruhubiComponent implements OnInit {
  title="Maruhubi Palace Ruins in Zanzibar";
  longText = `The ruins of Maruhubi Palace are only four kilometres north of Zanzibar Town, just a few steps from the beach. The palace is named after its former owner, an Arab from the Al-Marhuby tribe.
  The palace was built by Sultan Barghash, the third Arab sultan of Zanzibar, between 1880-1882.  Sultan Barghash used the palace to house his wife and up to 100 concubines, while he himself lived in a separate palace in Zanzibar Town.
  Maruhubi Palace was destroyed by a fire in 1899, leaving few remains including the large stone columns which had once supported a large wooden balcony that circumnavigated the upper floor. In the old Persian-style bathhouse, the separate bathrooms for the women and the Sultan's own large bathroom can still be viewed.  
  The grounds are spotted with shade trees, large lawn areas, and the original water reservoirs now overgrown with water lilies and large mango trees once imported from India.  When viewing, it is not hard to imagine a magical garden where the royal elite would entertain their guests.
  Today, the sandy beach behind the palace is used by local fishermen as a sort of informal shipyard, where they build and fix their traditional wooden fishing dhows using only hand tools.
  `;

  constructor() { }

  ngOnInit(): void {
  }

}

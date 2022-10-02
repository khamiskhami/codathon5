import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anglican',
  templateUrl: './anglican.component.html',
  styleUrls: ['./anglican.component.css']
})
export class AnglicanComponent implements OnInit {
  title="Old Anglican Church in Zanzibar";
  longText = ` The Old Anglican Church is a must see for anyone interested in Zanzibar history and the influence of the British abolitionist movement on Zanzibar.  The Cathedral's altar symbolically stands on the location of the whipping post from the island's largest slave market.  The Church is open to visitation, and on the grounds is one of the most famous Slave Monuments in the world.
  The Cathedral was built in 1873 by Edward Steere, the third Bishop of Zanzibar and famous British abolitionist.  The Cathedral took ten years to build and its strange barrel vault roof was Steere’s own invention.  It still stands strong today despite the local belief at the time of construction that it would never hold.  Bishop Steer died in 1882 and was buried behind the altar.
  Of further historical significance, the wooden cross was made from the tree beneath which the famed explorer and anti-slavery crusader Dr. David Livingstone’s heart was buried.  He died at the village of Dhitambo in Zambia on 2 May 1873 while searching for the source of the Nile.  Two of his loyal companions, Susi and Chumah, removed his heart and buried it under the tree at the spot where he died.  They dried his body in the sun for two weeks before carrying it back to Zanzibar.
   `;


  constructor() { }

  ngOnInit(): void {
  }

}

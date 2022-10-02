import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kizimkazi',
  templateUrl: './kizimkazi.component.html',
  styleUrls: ['./kizimkazi.component.css']
})
export class KizimkaziComponent implements OnInit {
  title="Kizimkazi Mosque in Zanzibar";
  longText = ` The Kizimkazi Mosque is believed to be the oldest Islamic building on the East African coast, and it is still in use today.  It is located on the southern tip of the main island of Zanzibar near the village of Kizimkazi.  Despite its name, it is actually located in the village of Dimbani, about three kilometers northwest of Kizimkazi. 
  According to a well preserved kufic inscription, it was built in 1107 under the order of Sheikh Said bin Abi Amran Mfaume al Hassan bin Muhammad by settlers from Shiraz, Iran.   However, another inscription tells of a major rebuilding of the mosque in 1772-1773. Although much of the coral detailing and column shafts date from the original construction in the twelfth century, the majority of the current structure is from the rebuild in the 18th century.  More recently, the east wall of the mosque has been reconstructed and the roof of the mosque has been replaced with one of corrugated metal. 
  Around the mosque are several seventeenth century tombs decorated with pillars, one of which notes Sheikh Ali bin Omar, a man with one arm and one leg.  It is not uncommon today to see prayer flags tied to the tombs.
   `;


  constructor() { }

  ngOnInit(): void {
  }

}

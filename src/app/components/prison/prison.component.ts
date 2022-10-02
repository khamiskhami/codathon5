import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prison',
  templateUrl: './prison.component.html',
  styleUrls: ['./prison.component.css']
})
export class PrisonComponent implements OnInit {
  title="Prison Island Tour in Zanzibar";
  longText = `  Changuu Island, commonly referred to as Prison Island, is just a 20 – 30 minute boat ride from Stone Town, Zanzibar.  Arriving by boat, the first thing you will see is a rustic wooden bridge jutting out into the azure blue waters of the Indian Ocean.  The primary attractions are the giant sea tortoises and the prison ruins.
  Historically, Prison Island was first used by Arab slave merchants as a place to detain slaves, and in 1890 the British built what was intended as a prison for Stone Town.  Although the building was never actually used as a prison, it later became a quarantine station for Zanzibar, Kenya, Uganda and what was then Tanganyika. A five minute walk across the island from the prison ruins is the giant tortoise sanctuary.  Originally imported from the Seychelles in the late 19th century, these magnificent creatures are friendly and sometimes the tortoise keepers may offer a child the opportunity to sit atop and ride one of the gentle giants.  Beware, it is not uncommon to catch a pair of tortoises copulating!
  The island is fringed with a small but beautiful coral reef, ideal for snorkeling, and has a lovely white sandy beach for sunbathing.  You can hire masks and fins once you’ve landed.  There is also a small restaurant offering drinks and refreshments, but usually only has one thing on the menu – fresh fish, chips, and salad.
  
  `;


  constructor() { }

  ngOnInit(): void {
  }

}

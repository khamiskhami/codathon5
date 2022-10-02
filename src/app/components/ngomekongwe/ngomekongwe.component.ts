import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngomekongwe',
  templateUrl: './ngomekongwe.component.html',
  styleUrls: ['./ngomekongwe.component.css']
})
export class NgomekongweComponent implements OnInit {
  title="The Arab Fort in Zanzibar Town";
  longText = `The Arab Fort, also known as the Old Fort or by its local name Ngome Kongwe, is next to Beit al-Ajaib - The House of Wonders Museum.  It is a very large and imposing structure, with high walls topped by castellated battlements.  
  The Fort was built between 1698 and 1701, immediately after the two-century Portuguese occupation of Zanzibar, by the Busaidi group of Omani Arabs who took control of Zanzibar in 1698.  The Fort was constructed on the site of a Portuguese church which had been built between 1598 and 1612.  In the main courtyard remnants of the old church can still be seen built into the inside wall. the Mazrui, who occupied Mombasa at that time.  In the 19th century, the fort became a prison and criminals were incarcerated, punished and sometimes executed.  In Swahili the word “gereza” means prison, and some believe it to be derived from the Portuguese word “ireja”, meaning church.  Then, in the early 20th century, the fort became a depot for the railway which ran from Zanzibar Town to Bububu, north of Stone Town.  In 1949, the Fort was refurbished and the main courtyard was used as a ladies' tennis club, but after the 1964 Revolution it fell into disuse.
 drama and dance `;


  constructor() { }

  ngOnInit(): void {
  }

}

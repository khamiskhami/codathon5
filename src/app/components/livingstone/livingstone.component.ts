import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livingstone',
  templateUrl: './livingstone.component.html',
  styleUrls: ['./livingstone.component.css']
})
export class LivingstoneComponent implements OnInit {
  title="Livingstone House in Zanzibar";
  longText = ` David Livingstone is probably the best-known of all the 19th century European explorers in Africa.  Many of his journeys began and ended in Zanzibar, and he lived in this house before departing on his final journey to identify the source of the Nile.
  The house was built around 1860 by Sultan Majid and is located on the northeast side of Stone Town.  It was used by Livingstone and other missionaries and explorers such as Burton, Speke, Cameron and Stanley as a starting point for expeditions into eastern and central Africa during the second half of the 19th century.
  In the early 20th century, the house was used by members of the island's Indian community for a variety of purposes.  In 1947, it was bought by the colonial government and became a scientific laboratory for research into clove diseases.  After independence and the revolution it became the Zanzibar headquarters of the Tanzania Friendship Tourist Bureau.  Today, this old building is now the main office of the Zanzibar Tourist Corporation (ZTC).
   `;

  constructor() { }

  ngOnInit(): void {
  }

}

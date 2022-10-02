import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beitajab',
  templateUrl: './beitajab.component.html',
  styleUrls: ['./beitajab.component.css']
})
export class BeitajabComponent implements OnInit {
  title="Beit al-Ajaib";
  longText = `Known as the House of Wonders,  Beit el Ajaib  was built around 1883 as the ceremonial palace for the ruling sultan, Sultan Barghash.  This is one of the most prominent and magnificent structures in Zanzibar and all of East Africa.  It is the first building in East Africa to have electricity and an electric elevator!  Beit al Ajaib can be seen from a great distance while approaching Zanzibar from the sea, and now acts as a symbol of Zanzibar’s rich history and is featured on many postcards and history books.In the House of Wonders Museum, visitors will learn not only about Zanzibar’s rich history and culture, but also about the history and culture of the entire Swahili Coast which extends from Southern Somalia to Northern Mozambique.  Over the past decade a considerable amount of archaeological and historical research has been undertaken to reveal a very long and rich history that can now be systematically exhibited.  The East African coast is also the western rim of the Indian Ocean, and the museum will therefore highlight the historical and cultural consequences of the convergence along the East African coast of continental Africa and the maritime world of the Indian Ocean.`;

  constructor() { }

  ngOnInit(): void {
  }

}

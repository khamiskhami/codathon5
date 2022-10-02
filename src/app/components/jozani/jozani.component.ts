import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jozani',
  templateUrl: './jozani.component.html',
  styleUrls: ['./jozani.component.css']
})
export class JozaniComponent implements OnInit {
  title="Jozani Forest Zanzibar";
  longText = `Although most of Zanzibar’s natural forest has been lost to agriculture or construction, the Jozani Forest is a protected reserve, and is the largest conservation area in Zanzibar.  It is conveniently located in the centre of Zanzibar about 24 km southeast of Stone Town, and at 44 square kilometers the Jozani Forest covers approximately 3% of the Zanzibar main island. 

  The reserve contains a large mangrove swamp and natural coral rag forest that is home to over 100 different kinds of trees and species such as the rare and endangered red colobus monkey, Sykes monkey, bush babies, duikers, hyraxes, over 50 species of butterfly and 40 species of birds.   With a population estimated at fewer than 2,000, the red colubus monkey is one of the rarest monkeys in Africa and can only be found on the main island of Zanzibar. 
   
  The reserve is managed by the local residents who operate tree nurseries and act as rangers and guides. From the visitors' centre, visitors will take a guided 45-minute nature trail into the beautiful and peaceful forest where there is excellent opportunity to spot the red colobus monkey.
  
  `;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phome',
  templateUrl: './phome.component.html',
  styleUrls: ['./phome.component.css']
})
export class PhomeComponent implements OnInit {
  title="Ngezi National Park";
  longText = ` This is the biggest patch of tropical forest located on the northwestern corner of Pemba. It is the home for many endemic species, and an amazing jungle experience.
  What you can find:
  •	Monkeys
  •	Bush babies
  •	Pemba fruit bats
  •	Birds
  •	Flowers
  •	Butterflies
  •	Spice plants
  •	A natural fresh water lake
  •	Owls at night time (ask specifically for this)
  Full information about Ngezi Forest
  In Ngezi Forest there are monkeys, bush babies, fruit bats, all different kinds of birds, flowers, spices and natural lakes. Remnants of an old timber business can also be found in the forest.  The forest is an experience for all the senses.
  You can also request for a night walk to see the owls. Another special option is a full day hike in the forest – approx. 8 hours.
   `;


  constructor() { }

  ngOnInit(): void {
  }

}

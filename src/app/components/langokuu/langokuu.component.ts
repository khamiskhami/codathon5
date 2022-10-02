import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-langokuu',
  templateUrl: './langokuu.component.html',
  styleUrls: ['./langokuu.component.css']
})
export class LangokuuComponent implements OnInit {
  title="MkamaNdume Pemba";
  longText = ` Kisima cha wivu
  Mkamandume kuwa na wanawake wawili, lakini aliwaficha siri kiasi kwamba hakuna aliyemjua mwenzake, badala yake kila mmoja akawa anaamini yupo peke yake kwa kigogo huyo, licha ya kuishi katika eneo hilo.
  Anasema kila mmoja alikuwa ana sehemu yake, hivyo alikuwa akienda kwa mmoja baada ya mwingine alipokuwa akiwahitaji.
  Kutokana na hali hiyo, Mkamandume alihisi sehemu pekee wanayoweza kuonana wake zake hao ni wakati wa kuchota maji kisimani, hivyo kisima hicho akakitengeneza kwa mfumo ambao wasiweze kuonana na kukiwekea ukuta katikati.
  Katika kisima hicho upande mmoja wa kusini alitengeneza ngazi za kushuka hadi chini na upande mwingine wa Kaskazini ukabaki juu, kwa hiyo mwanamke mmoja alikuwa akitumia upande wa ngazi na mwingine anatumia upande uliobaki juu kwa kufunga ndoo kamba na kutumbukiza ndani ya kisima kutokana na urefu.
  Mwanamke aliyekuwa akitumia ngazi alikuwa akichota maji kwa kutumia kata kutokana na ufupi wa kisima hicho.
   
  `;


  constructor() { }

  ngOnInit(): void {
  }

}

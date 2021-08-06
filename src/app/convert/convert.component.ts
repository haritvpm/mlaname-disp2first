import { MLANAMES } from './../mla-names';
import { MlaName } from './../interfaces/mlaname';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})

export class ConvertComponent implements OnInit {


  mlanames = MLANAMES;

  constructor() { }

  ngOnInit(): void {
  }

}

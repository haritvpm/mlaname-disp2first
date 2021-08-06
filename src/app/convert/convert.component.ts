import { MLANAMES } from './../mla-names';
import { MlaName } from './../interfaces/mlaname';
import { Component, OnInit,NgZone,ViewChild } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})

export class ConvertComponent implements OnInit {


  mlanames = MLANAMES;

  constructor(private _ngZone: NgZone) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit(): void {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}

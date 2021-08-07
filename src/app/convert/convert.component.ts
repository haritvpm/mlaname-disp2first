import { MLANAMES } from './../mla-names';
import { MlaName } from './../interfaces/mlaname';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
//import {CdkTextareaAutosize} from '@angular/cdk/text-field';
//import {take} from 'rxjs/operators';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})

export class ConvertComponent implements OnInit {


  mlanames = MLANAMES;
  inputnames = ''
  outputnames = ''
  conv = ''
  errors = ''
  constructor( private clipboardApi: ClipboardService ) { }



  ngOnInit(): void {
  }

  onConvert() {
    try {


      //create mlalogin to firstname map
      let map = new Map();
      this.mlanames.forEach(mlaname => {

        map.set(mlaname.userid, mlaname.fname + ' ' + mlaname.lname)

      })

      this.conv = ''
      this.errors = ''

      let mlalogins = this.inputnames.split('\n')

      mlalogins.forEach(mlaname => {

        mlaname.trim();
        if (mlaname) {
          if (!map.has(mlaname)) {
            this.errors += mlaname + '\n'
          }
          this.conv += map.get(mlaname) + '\n'
        }

      })

      if (this.errors) {
        //alert('Unable to convert: \n' + this.errors)
        this.outputnames = 'Unable to convert: \n' + this.errors
      } else {
        this.outputnames = this.conv
      }

    } catch (e) {
      console.info('could not set textarea-value');
    }
  }


  onCopy(){
    this.clipboardApi.copyFromContent(this.outputnames)

  }

}

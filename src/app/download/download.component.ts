import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {DownloadService} from "./download.service";
import {momentPromise, saveAsPromise} from "./import.lib";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  maxDate: Date = new Date()
  show: boolean = false;

  constructor(public service: DownloadService,
              @Inject(DOCUMENT) public document: Document,
  ) {
  }

  download(): void {
    saveAsPromise().then(saveAsLib => {
      const doc = saveAsLib.default
      this.service.download().subscribe(blob => {
        doc.saveAs(blob, `love.pdf`);
      });
    })

  }

  ngOnInit(): void {

  }

  showDate(): void {
    this.show = !this.show;
    momentPromise().then(lib => {
      const doc = new lib.default
      this.maxDate = new Date(doc.year() + 7, 0, 1);
    })
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {DownloadService} from "./download.service";
import {saveAsPromise} from "./import.lib";


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
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

}

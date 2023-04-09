import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {saveAs} from "file-saver";
import {DownloadService} from "./download.service";

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
    this.service.download().subscribe(blob => {
      saveAs(blob, `love.pdf`);
    });
  }

  ngOnInit(): void {
  }

}

import {Component} from '@angular/core';
import {saveAs} from "file-saver";
import {DownloadService} from "./download.service";
import * as moment from "moment";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  maxDate: Date = new Date()
  show: boolean = false;

  constructor(public service: DownloadService
  ) {
  }

  download(): void {
    this.service.download().subscribe(blob => {
      saveAs(blob, `love.pdf`);
    });
  }

  showDate(): void {
    this.show = !this.show;
    this.maxDate = new Date(moment().year() + 7, 0, 1);
  }

}

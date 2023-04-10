import {Component} from '@angular/core';
import {DownloadService} from "./download.service";
import {momentPromise, saveAsPromise} from "./import.lib";

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
    saveAsPromise().then(saveAsLib => {
      const doc = saveAsLib.default
      this.service.download().subscribe(blob => {
        doc.saveAs(blob, `love.pdf`);
      });
    })

  }

  showDate(): void {
    this.show = !this.show;
    momentPromise().then(lib => {
      const doc = new lib.default
      this.maxDate = new Date(doc.year() + 7, 0, 1);
    })
  }
}

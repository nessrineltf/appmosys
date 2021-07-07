import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ImageService} from '../providers/image.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-mes-documents',
  templateUrl: './mes-documents.page.html',
  styleUrls: ['./mes-documents.page.scss'],
})
export class MesDocumentsPage implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  constructor(private uploadService: ImageService) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          // @ts-ignore
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

}

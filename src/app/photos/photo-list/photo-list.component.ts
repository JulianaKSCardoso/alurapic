import { OnInit } from "@angular/core";
import { PhotoService } from "../photo/photo.service";

export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

  this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}

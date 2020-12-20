import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Image {
  src: string
};

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.images = [
      'assets/bake1.jpeg',
      'assets/bake2.jpeg',
      'assets/bake3.jpeg',
      'assets/bake4.jpeg',
      'assets/bake5.jpeg',
      'assets/bake6.jpeg',
      'assets/bake7.jpeg',
      'assets/bake8.jpeg',
    ];
  }

  openImage(image): void {
    const dialogRef = this.dialog.open(ImageDialog, {
        height: '100%',
        data: {src: image}
      }
    );
  }

}

@Component({
  selector: 'image-dialog',
  templateUrl: 'image-dialog.html',
})
export class ImageDialog {

  constructor(
    public dialogRef: MatDialogRef<ImageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Image) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

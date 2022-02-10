import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private static readonly imagePrefix = 'http://localhost:4200/?image=';

  title = 'Bob\'s sweet images';
  images: string[];
  selectedImage: string;
  comment: string;
  comments: string[];

  constructor(private readonly router: ActivatedRoute) {
    this.comment = '';
    this.comments = [];
  }

  ngOnInit() {
    this.images = ['sheep', 'butterfly', 'frog', 'dog', 'cat', 'spider', 'bear', 'rabbit', 'kuala', 'hedgehog'];

    this.router.queryParams
      .subscribe(params => {
        this.selectedImage = params?.image ?? ('../assets/images/unknown.png');
        this.addCommentValue(params.comment);
      });
  }

  selectImage(image: string) {
    window.location.href = AppComponent.imagePrefix + image;
  }

  addComment(commentElement: HTMLInputElement) {
    this.addCommentValue(commentElement.value);
    commentElement.value = '';
  }

  addCommentWithUrlEncoder(commentElement: HTMLInputElement) {
    const value = encodeURIComponent(commentElement.value);
    this.addCommentValue(value);
  }

  addCommentWithUrlEncoder2(commentElement: HTMLInputElement) {
    const value = this.encodeHex(commentElement.value);
    this.addCommentValue(value);
  }

  addCommentValue(comment: string) {
    if (comment) {
      this.comments.push(comment);
    }
  }

  encodeHex(value: string): string {
    let hex, i;

    let result = "";
    for (i = 0; i < value.length; i++) {
      hex = value.charCodeAt(i).toString(16);
      result += ("000" + hex).slice(-4);
    }
    return result
  }

  // decodeHex(value: string): string {
  //   let hexes = value.match(/.{1,4}/g) || [];
  //   let back = "";
  //   for (let j = 0; j < hexes.length; j++) {
  //     back += String.fromCharCode(parseInt(hexes[j], 16));
  //   }
  //   return back;
  // }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  private static readonly imagePrefix = 'http://localhost:4200/?image=';

  title = 'Bob\'s sweet images';
  images: string[];
  selectedImage: string;
  comment: string;
  comments: string[];

  constructor(private router: ActivatedRoute) {
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

  selectImage(image: string){
    window.location.href = AppComponent.imagePrefix + image;
  }

  addComment(commentElement: HTMLInputElement) {
    this.addCommentValue(commentElement.value);
    commentElement.value = '';
  }

  addCommentValue(comment: string) {
    if (comment) {
      this.comments.push(comment);
    }
  }
}

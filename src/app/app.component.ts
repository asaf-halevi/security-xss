import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Bob\'s sweet images';
  images: string[];
  selectedImage: string;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.images = ['sheep', 'butterfly', 'frog', 'dog', 'cat', 'spider', 'bear'];

    this.router.queryParams
      .subscribe(params => {
        console.log(params);
        this.selectedImage = params.image;
        console.log(this.selectedImage);
      });
  }

  selectImage(image: string){
    this.selectedImage = image;
  }
}

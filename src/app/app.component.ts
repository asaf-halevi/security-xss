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

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.images = ['sheep', 'butterfly', 'frog', 'dog', 'cat', 'spider', 'bear'];

    this.router.queryParams
      .subscribe(params => {
        this.selectedImage = params?.image ?? ('../assets/images/unknown.png');
      });
  }

  selectImage(image: string){
    window.location.href = AppComponent.imagePrefix + image;
  }
}

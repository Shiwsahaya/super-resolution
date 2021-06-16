import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-improve-quality',
  templateUrl: './improve-quality.component.html',
  styleUrls: ['./improve-quality.component.css']
})

export class ImproveQualityComponent implements OnInit {
  url: any = null;

  constructor() { }

  ngOnInit(): void {
    
  }

  onFileSelected(event: any) {
    console.log(event.target);
    
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
}
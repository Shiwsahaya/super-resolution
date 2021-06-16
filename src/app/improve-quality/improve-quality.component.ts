import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-improve-quality',
  templateUrl: './improve-quality.component.html',
  styleUrls: ['./improve-quality.component.css']
})
export class ImproveQualityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        // this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { UploadService } from '../upload-image-service';

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

  async onFileSelected(event: any) {
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      axios.put('', this.url, {
        headers: {
          'Content-Type': this.url.type
        }
      });
    }
  }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as deepai from 'deepai';
@Component({
  selector: 'app-improve-quality',
  templateUrl: './improve-quality.component.html',
  styleUrls: ['./improve-quality.component.css']
})

export class ImproveQualityComponent implements OnInit {
  url: any = null;
  scaledImage: any = '';  

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    
  }

  upscaleImage() {
    console.log('enter in upscale');
    deepai.setApiKey('990cd8d3-5d3c-4b66-a30f-7fbb73c71049');
    const formData = new FormData();
    formData.append('image', this.url);
    this.http.post<any>('https://api.deepai.org/api/torch-srgan', formData, {headers: {'api-key' : '990cd8d3-5d3c-4b66-a30f-7fbb73c71049'}}).subscribe(
      (res) => {
        console.log(res);
        this.scaledImage = res.output_url
      },
      (err) => console.log(err)
    );  
  }

  getURL() {

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
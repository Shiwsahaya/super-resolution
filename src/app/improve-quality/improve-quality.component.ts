import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
  progressBar: boolean = false;
  chooseButton: boolean = true;
  upscaleButton: boolean = false;
  scaledImageDiv: boolean = false;

  constructor(
    private http: HttpClient,
    private matProgressBarModule: MatProgressBarModule) { }

  ngOnInit(): void {

  }

  upscaleImage() {
    this.upscaleButton = false;
    this.progressBar = true;
    this.scaledImageDiv = true;
    console.log('enter in upscale');
    deepai.setApiKey('990cd8d3-5d3c-4b66-a30f-7fbb73c71049');
    const formData = new FormData();
    formData.append('image', this.url);
    this.http.post<any>('https://api.deepai.org/api/torch-srgan', formData, { headers: { 'api-key': '990cd8d3-5d3c-4b66-a30f-7fbb73c71049' } }).subscribe(
      (res) => {
        console.log(res);
        this.scaledImage = res.output_url
        this.chooseButton = true;
        this.progressBar = false;
      },
      (err) => {
        console.log(err);
        this.chooseButton = true;
      }
    );
  }

  getURL() {

  }

  async onFileSelected(event: any) {
    console.log(event, ' event');
    
    if (event.target.files) {
      console.log(event.target.files);
      
      this.chooseButton = false;
      this.upscaleButton = true;
      this.progressBar = false;
      this.scaledImageDiv = false;
      this.scaledImage = '';
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        // this.upscaleImage();
      }
      // axios.put('', this.url, {
      //   headers: {
      //     'Content-Type': this.url.type
      //   }
      // });
    }
  }

  downloadFile() {
    console.log(this.scaledImage, ' url');
    this.http.get(this.scaledImage, { responseType: 'blob' }).subscribe(val => {
      console.log(val);
      const url = URL.createObjectURL(val);
      this.downloadUrl(url, 'scaled-image.jpg');
      URL.revokeObjectURL(url);
    });
  }
  downloadUrl(url: string, fileName: string) {
    const a: any = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
  };
}
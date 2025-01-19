import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent {
  @ViewChild('videoElement')
  videoElement!: ElementRef;
  @ViewChild('canvasElement')
  canvasElement!: ElementRef;
  capturedImage: string | null = null;

  constructor() {}

  ngOnInit() {
    this.startCamera();
  }

  startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          this.videoElement.nativeElement.srcObject = stream;
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    } else {
      alert('Camera not supported on this browser!');
    }
  }

  captureImage() {
    const canvas: HTMLCanvasElement = this.canvasElement.nativeElement;
    // const context: CanvasRenderingContext2D = canvas.getContext('2d');

    // Draw the current video frame onto the canvas
    // context.drawImage(this.videoElement.nativeElement, 0, 0, canvas.width, canvas.height);

    // Get the image as a data URL (base64 encoded string)
    this.capturedImage = canvas.toDataURL('image/png');
  }
}

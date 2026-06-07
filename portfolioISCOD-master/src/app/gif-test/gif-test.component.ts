import { Component } from '@angular/core';

@Component({
  selector: 'app-gif-test',
  templateUrl: './gif-test.component.html',
  styleUrls: ['./gif-test.component.css']
})
export class GifTestComponent {
  //speed of gif by default
  gifSpeed = 1;

  //accelerate gif
  accelerateGif() {
    this.gifSpeed *= 2; 
  }
  
  //decelerate gif
  decelerateGif() {
    this.gifSpeed /= 2; 
  }

  // Dans votre composant
ngAfterViewInit() {
  const imgElement = document.getElementById('myGif') as HTMLImageElement;

  imgElement.addEventListener('load', () => {
    const gifFrames = this.calculateGifFrames(imgElement);
    console.log(`Nombre d'images dans le GIF :`, gifFrames);
  });
}

calculateGifFrames(imgElement: HTMLImageElement): number {
  const canvas = document.createElement('canvas');
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;
  let frameCount = 0;
  const context = canvas.getContext('2d');
  if(context != null){
    context.drawImage(imgElement, 0, 0);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const frameData = imageData.data;
    const frameSize = canvas.width * canvas.height * 4; // Chaque pixel est composé de 4 valeurs (rgba)
  
    
    let currentFrameStartIndex = 0;
  
    for (let i = 0; i < frameData.length; i += frameSize) {
      const isFrameComplete = frameData[i + 3] !== 0; // Vérifie si le pixel alpha est non transparent
      if (isFrameComplete && i !== currentFrameStartIndex) {
        frameCount++;
        currentFrameStartIndex = i;
      }
    }
  }


  return frameCount;
}

}

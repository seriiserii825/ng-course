import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toggle-image',
  imports: [],
  templateUrl: './toggle-image.html',
})
export class ToggleImage {
  isLoading = signal(false);
  images: string[] = [
    'https://ferramentaricco.altuofianco.com/wp-content/uploads/2026/04/home-intro.webp',
    'https://ferramentaricco.altuofianco.com/wp-content/uploads/2026/04/srv7.webp',
    'https://ferramentaricco.altuofianco.com/wp-content/uploads/2026/04/srv7.webp',
    'https://ferramentaricco.altuofianco.com/wp-content/uploads/2026/04/image2.webp',
    'https://ferramentaricco.altuofianco.com/wp-content/uploads/2026/04/slide3-1.webp',
  ];
  imageUrl: string = this.images[0];

  toggleImageRandom() {
    this.isLoading.set(true);
    const lastIndex = this.images.indexOf(this.imageUrl);
    let randomIndex = Math.floor(Math.random() * this.images.length);
    while (randomIndex === lastIndex) {
      randomIndex = Math.floor(Math.random() * this.images.length);
    }
    this.imageUrl = this.images[randomIndex];
    setTimeout(() => {
      this.isLoading.set(false);
    }, 600);
  }
}

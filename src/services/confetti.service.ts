import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  private timer: any;

  celebrate() {
    if(!!this.timer)
      clearTimeout(this.timer);

    const duration = 6000;

    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: ['#FF4500', '#008080', '#FFD700'],
    });

    this.timer = setTimeout(() => confetti.reset(), duration);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  userData: any;
  ngOnInit() {
    const nav = window.history.state;
    this.userData = nav.userData;
  }
}

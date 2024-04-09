import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter = signal(0);

course = signal({
  id: 1,
  title: "Signals Course"
})

courses = signal([
  "Signal Course",
  "Signal Chnage Detection"
])

  increment() {
    this.counter.update(val => val + 1);
  }
}

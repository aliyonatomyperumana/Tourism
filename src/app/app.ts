import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Districts } from './pages/districts/districts';
import { Contact } from './pages/contact/contact';
import { Navbar } from './common/navbar/navbar';
import { Cards } from './ui/cards/cards';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tourism');
}

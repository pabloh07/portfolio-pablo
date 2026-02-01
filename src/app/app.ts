import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reveal } from './reveal';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';


@Component({
 selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Home,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
    Reveal
  ],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('portfolio-pablo');
}

import { Component } from '@angular/core';
import { Reveal } from '../../reveal';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Reveal],
  template: `
    <header class="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <span class="font-semibold text-lg">Pablo.dev</span>
        <div class="space-x-6 text-sm">
          <a href="#about" class="hover:text-indigo-400">Sobre</a>
          <a href="#skills" class="hover:text-indigo-400">Skills</a>
          <a href="#projects" class="hover:text-indigo-400">Projetos</a>
          <a href="#contact" class="hover:text-indigo-400">Contato</a>
        </div>
      </nav>
    </header>
  `
})
export class Header {}

import { Component } from '@angular/core';
import { Reveal } from '../../reveal';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Reveal],
  template: `
    <footer id="contact" class="py-16 bg-zinc-900 text-center text-gray-400">
      <p>© 2026 Pablo Henrique</p>
      <p class="mt-2">
        <a
          href="https://github.com/pabloh07"
          target="_blank"
          class="hover:text-white"
        >
          GitHub
        </a>
      </p>
    </footer>
  `
})
export class Footer {}

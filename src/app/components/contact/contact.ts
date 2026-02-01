import { Component } from '@angular/core';
import { Reveal } from '../../reveal';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Reveal],
  template: `
    <section
      id="contact"
      class="py-32 bg-black text-white border-t border-white/10"
    >
      <div reveal class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold mb-6">Contato</h2>

        <p class="text-gray-400 mb-10">
          Quer conversar ou ver mais do meu trabalho?
          Me chama em qualquer um dos canais abaixo.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:pablo23102007@gmail.com"
            class="px-6 py-3 border border-white/20 rounded-lg
                   hover:border-indigo-500 hover:text-indigo-400 transition"
          >
            Email
          </a>

          <a
            href="https://github.com/pabloh07"
            target="_blank"
            class="px-6 py-3 border border-white/20 rounded-lg
                   hover:border-indigo-500 hover:text-indigo-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pablo-henrique-de-andrade-da-silva/"
            target="_blank"
            class="px-6 py-3 border border-white/20 rounded-lg
                   hover:border-indigo-500 hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  `
})
export class Contact {}

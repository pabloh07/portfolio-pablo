import { Component } from '@angular/core';
import { Reveal } from '../../reveal';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Reveal],
  template: `
    <section id="about" class="py-32 bg-black text-gray-300">
      <div reveal class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl font-semibold mb-6 text-white">Sobre</h2>
        <p class="leading-relaxed text-lg">
          Desenvolvedor focado em aplicações web modernas, com experiência
          em Angular, C# e ASP.NET. Gosto de criar interfaces limpas,
          performáticas e bem estruturadas.
        </p>
      </div>
    </section>
  `
})
export class About {}

import { Component } from '@angular/core';
import { Reveal } from '../../reveal';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Reveal],
  template: `
    <section class="h-screen flex items-center justify-center bg-black text-white">
      <div reveal class="text-center px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          Pablo Henrique
        </h1>
        <p class="text-xl md:text-2xl text-gray-400 mb-6">
          Desenvolvedor Full Stack
        </p>
        <p class="text-gray-500">
          Angular • C# • ASP.NET
        </p>
      </div>
    </section>
  `
})
export class Home {}

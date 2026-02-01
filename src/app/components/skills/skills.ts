import { Component } from '@angular/core';
import { Reveal } from '../../reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [Reveal],
  template: `
    <section id="skills" class="py-32 bg-zinc-900 text-white">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-semibold mb-12">Skills</h2>

        <div reveal class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div class="border border-white/10 p-6 rounded-lg">Angular</div>
          <div class="border border-white/10 p-6 rounded-lg">TypeScript</div>
          <div class="border border-white/10 p-6 rounded-lg">C# / .NET</div>
          <div class="border border-white/10 p-6 rounded-lg">SQL</div>
        </div>
      </div>
    </section>
  `
})
export class Skills {}

import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reveal } from '../../reveal';
import { getRepos, Repo } from '../../github';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Reveal],
  template: `
    <section id="projects" class="py-32 bg-black text-white">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-semibold mb-12">Projetos</h2>

        <div *ngIf="repos().length === 0" class="text-gray-500">
          Carregando projetos...
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            *ngFor="let repo of repos()"
            reveal
            class="border border-white/10 p-6 rounded-lg
                   hover:border-indigo-500 transition"
          >
            <h3 class="text-xl mb-2">{{ repo.name }}</h3>

            <p class="text-gray-400 mb-4">
              {{ repo.description || 'Sem descrição' }}
            </p>

            <div class="flex justify-between text-sm text-gray-500 mb-4">
              <span>{{ repo.language || 'N/A' }}</span>
              <span>⭐ {{ repo.stargazers_count }}</span>
            </div>

            <a
              [href]="repo.html_url"
              target="_blank"
              class="text-indigo-400 text-sm"
            >
              Ver no GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class Projects implements OnInit {

  repos = signal<Repo[]>([]);

  async ngOnInit() {
    const data = await getRepos();
    this.repos.set(data);
  }
}

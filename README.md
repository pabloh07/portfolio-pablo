# 🚀 PortfolioPablo

Portfólio profissional desenvolvido em **Angular (v21)** com o objetivo de apresentar meus projetos, habilidades e experiência como desenvolvedor **Full Stack**, com foco em **Angular, C# e ASP.NET**.

Este site funciona como uma **one-page application**, com navegação simples e design minimalista.

---

## 🧑‍💻 Sobre o projeto

O **PortfolioPablo** foi criado para:
- Apresentar projetos reais desenvolvidos por mim
- Demonstrar conhecimentos em Angular moderno (standalone components)
- Servir como cartão de visitas profissional para recrutadores e empresas

---

## 🛠️ Tecnologias utilizadas

- **Angular 21**
- **TypeScript**
- **HTML5**
- **CSS3**
- **Angular CLI**
- **Git & GitHub**

---

## ▶️ Servidor de desenvolvimento

Para iniciar o servidor local:

```bash
ng serve
````

Depois, acesse no navegador:

http://localhost:4200/

A aplicação será recarregada automaticamente sempre que houver alterações no código.

🧱 Estrutura do projeto

O projeto utiliza a arquitetura moderna do Angular (standalone):

src/
 ├── index.html
 ├── main.ts
 └── app/
     ├── app.component.ts
     ├── app.component.html
     ├── app.component.css
     └── components/
         ├── header/
         ├── home/
         ├── about/
         ├── skills/
         ├── projects/
         ├── contact/
         └── footer/

⚙️ Geração de componentes

Para criar novos componentes:

ng generate component nome-do-componente


O Angular CLI já gera os componentes como standalone, seguindo o padrão mais recente do framework.

🏗️ Build para produção

Para gerar o build do projeto:

ng build


Os arquivos finais serão gerados na pasta:

dist/


O build de produção é otimizado para melhor desempenho e carregamento.

🧪 Testes
Testes unitários
ng test


Os testes utilizam o Vitest como test runner.

Testes end-to-end
ng e2e


O Angular CLI não inclui um framework de e2e por padrão. É possível configurar ferramentas como Cypress ou Playwright.

🌐 Deploy

O projeto pode ser publicado facilmente utilizando:

GitHub Pages

Vercel

Netlify

📎 Links

📌 Autor

Pablo Henrique
Desenvolvedor Full Stack
Angular • C# • ASP.NET
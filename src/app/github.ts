export interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

export async function getRepos(): Promise<Repo[]> {
  const response = await fetch(
    'https://api.github.com/users/pabloh07/repos'
  );

  const data = await response.json();

  return data
    .filter((repo: any) => !repo.fork && repo.name.toLowerCase() !== 'pabloh07')
    .sort(
      (a: any, b: any) => b.stargazers_count - a.stargazers_count
    )
    .slice(0, 6);
}

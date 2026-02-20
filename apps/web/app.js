const form = document.querySelector('#project-form');
const themeSelect = document.querySelector('#theme-select');
const projectsList = document.querySelector('#projects-list');

async function loadThemes() {
  const response = await fetch('/api/themes');
  const data = await response.json();
  themeSelect.innerHTML = data.themes
    .map((theme) => `<option value="${theme.id}">${theme.name}</option>`)
    .join('');
}

async function loadProjects() {
  const response = await fetch('/api/projects');
  const data = await response.json();

  projectsList.innerHTML = data.projects
    .map(
      (project) => `
      <li>
        <strong>${project.name}</strong> — ${project.themeId}
        <span class="badge">${project.status}</span>
      </li>`
    )
    .join('');

  if (data.projects.length === 0) {
    projectsList.innerHTML = '<li>Nenhum projeto criado ainda.</li>';
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const payload = {
    name: formData.get('name'),
    themeId: formData.get('themeId'),
    photoDuration: Number(formData.get('photoDuration')),
    youtubeUrl: formData.get('youtubeUrl') || null
  };

  const response = await fetch('/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const { errors } = await response.json();
    alert(errors?.join('\n') || 'Erro ao criar projeto');
    return;
  }

  form.reset();
  await loadProjects();
});

await loadThemes();
await loadProjects();

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    let result = await response.json();
    return result;
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let name = await prompt('Введите логин?', 'iliakan');
  try {
    const response = await loadJson(`https://api.github.com/users/${name}`);
    if (response) {
      const user = response.json();
      alert(`Полное имя: ${user.name}.`);
      return user;
    }
  } catch {
    if (err instanceof HttpError && err.response.status == 404) {
      alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}
demoGithubUser();

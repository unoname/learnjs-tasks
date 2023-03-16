async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    let result = await response.json();
    return result;
  } else {
    throw new Error(response.status);
  }
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404

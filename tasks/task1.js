"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."
"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function fetchUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await response.json();
  return data; // це буде масив користувачів з полями id, name, ...
}

console.log(fetchUsers());
module.exports = fetchUsers;
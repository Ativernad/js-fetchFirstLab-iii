"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."
"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function createUser(user) {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  const data = await response.json();
  return data; // об'єкт з id, name, email
}

console.log(createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" }));
module.exports = createUser;
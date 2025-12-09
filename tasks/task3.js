"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."
"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

async function updateUser(id, updatedData) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  });

  if (!response.ok) {
    throw new Error('Failed to update user');
  }

  const data = await response.json();
  return data; // повинен містити оновлене name та той самий id
}

console.log(updateUser(1, { name: 'New Name' }));
module.exports = updateUser;
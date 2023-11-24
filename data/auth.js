let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$12$W1Gv5v6d5dZJ2j7l3n8l2O3Y0gEJ7jQr9W6k2z8hXW3P8jZq8l7l2",
    name: "Bob",
    email: "bob@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}

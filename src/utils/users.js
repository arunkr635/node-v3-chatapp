const users = [];

const addUser = ({ id, username, room }) => {
  //Clean Data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate Data

  if (!username || !room) {
    return {
      Error: "username and room are required",
    };
  }

  //check for existing user

  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //validating username
  if (existingUser) {
    return {
      error: "username is in use",
    };
  }

  //store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

//remove user
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

//get user by id
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

//get users in room

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };

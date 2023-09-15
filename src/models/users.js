const dbPool = require("../config/database");

const getAllUsers = () => {
  const sqlQuery = "select * from users";

  return dbPool.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = `insert into users values(NULL, '${body.name}', '${body.email}', '${body.address}')`;

  return dbPool.execute(sqlQuery);
};

const updateUser = (body, id) => {
  const sqlQuery = `update users set name='${body.name}', email='${body.email}', address='${body.address}' where id=${id}`;

  return dbPool.execute(sqlQuery);
};

const deleteUser = (id) => {
  const sqlQuery = `delete from users where id=${id}`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};

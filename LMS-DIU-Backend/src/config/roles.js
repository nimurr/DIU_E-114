const allRoles = {
  user: ["common", "user"],
  admin: ["common", "admin"],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};

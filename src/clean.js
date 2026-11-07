// User lookup helper (clean variant)
function findUser(db, username, password) {
  var q = "SELECT * FROM users WHERE user = '" + username + "' AND pass = '" + password + "'";
return db.query(q);
}
module.exports = findUser;

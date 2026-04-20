function createLoginTracker({ username, password }) {
  let attempts = 0;
  let locked = false;

  return function (inputPassword) {
    if (locked) {
      return 'Account locked due to too many failed login attempts';
    }

    if (inputPassword === password) {
      return 'Login successful';
    }

    attempts++;

    if (attempts >= 3) {
      locked = true;
    }

    return `Attempt ${attempts}: Login failed`;
  };
}

module.exports = createLoginTracker;
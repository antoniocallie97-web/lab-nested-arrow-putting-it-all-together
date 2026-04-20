function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    // Lock AFTER 3 attempts (on 4th call)
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Correct password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // Failed attempt
    return `Attempt ${attemptCount}: Login failed`;
  };
}

module.exports = createLoginTracker;
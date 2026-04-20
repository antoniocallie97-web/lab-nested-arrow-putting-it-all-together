function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    // If already exceeded attempts
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Check password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

module.exports = createLoginTracker;
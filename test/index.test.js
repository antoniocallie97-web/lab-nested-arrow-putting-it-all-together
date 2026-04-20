const createLoginTracker = require('../index');

describe('createLoginTracker', () => {

  test('returns a function', () => {
    const tracker = createLoginTracker({ username: 'u', password: 'p' });
    expect(typeof tracker).toBe('function');
  });

  test('successful login', () => {
    const tracker = createLoginTracker({ username: 'u', password: 'p' });
    expect(tracker('p')).toBe('Login successful');
  });

  test('failed attempts', () => {
    const tracker = createLoginTracker({ username: 'u', password: 'p' });
    expect(tracker('x')).toBe('Attempt 1: Login failed');
    expect(tracker('x')).toBe('Attempt 2: Login failed');
    expect(tracker('x')).toBe('Attempt 3: Login failed');
  });

  test('locks after 3 attempts', () => {
    const tracker = createLoginTracker({ username: 'u', password: 'p' });
    tracker('x');
    tracker('x');
    tracker('x');
    expect(tracker('p')).toBe('Account locked due to too many failed login attempts');
  });

});
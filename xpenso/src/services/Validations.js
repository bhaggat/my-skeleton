export function validateEmail(email) {
  const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
  return emailRegex.test(email);
}

export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return "Enter a valid email address";
  if (email.length < 5) return "Email must be atleast 4 characters";
  return "";
};

export const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (password.length < 8) return "Password must be atleast 8 characters";
  if (!passwordRegex.test(password)) return "Enter a valid password";
  return "";
};

export const isValidUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
  if (!usernameRegex.test(username)) return "Enter a valid username";
  if (username.length < 4) return "Username must be atleast 4 characters";
  return "";
};

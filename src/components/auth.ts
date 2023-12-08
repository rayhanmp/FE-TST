const TOKEN_KEY: string = '';

export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export function logIn(token: string): void {
  return localStorage.setItem("token", token);
}

export function logOut(): void {
  return localStorage.removeItem("token");
}

export function UserAuthorized(): Boolean {
  const token = localStorage.getItem("token");

  return Boolean(token && token.length);
}

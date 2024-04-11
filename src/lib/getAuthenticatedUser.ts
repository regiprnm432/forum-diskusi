interface UserAccount {
  username: string;
}

export function getAuthenticatedHttpClient() {
  const userAccountData: UserAccount = {
    username: "sendist",
  };

  return userAccountData;
}

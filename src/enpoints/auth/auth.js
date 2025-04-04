function auth({client}) {
  function auth({user}) {
    return client({
      url: `/api/auth/local`,
      method: "post",
      data: {
        identifier: user.identifier,
        password: user.password
      }
    });
  }

  function login({user}) {
    return client({
      url: `/api/auth/login`,
      method: "post",
      data: {
        email: user.email,
        password: user.password
      }
    });
  }

  function verifyTotp({user}) {
    return client({
      url: `/api/auth/verify-totp`,
      method: "post",
      data: {
        email: user.email,
        token: user.token
      }
    });
  }

  return {
    auth,
    login,
    verifyTotp
  };
}

module.exports = auth;

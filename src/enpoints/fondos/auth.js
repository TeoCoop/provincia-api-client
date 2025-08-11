function auth({ client }) {
  function auth({ user }) {
    return client({
      url: `/api/auth/local`,
      method: "post",
      data: {
        identifier: user.identifier,
        password: user.password,
      },
    });
  }

  function login({ user, access_token }) {
    return client({
      url: `/api/login/fondos/request-code`,
      method: "post",
      data: {
        email: user.email,
        password: user.password,
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }

  function verifyTotp({ user, access_token }) {
    // 1. Renamed for clarity
    return client({
      url: `/api/login/fondos/verify-code`, // 2. Added /api prefix
      method: "post",
      data: {
        email: user.email,
        code: user.token, // 3. Changed payload key from 'token' to 'code'
      },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }

  return {
    auth,
    login,
    verifyTotp,
  };
}

module.exports = auth;

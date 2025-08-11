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

  function login({ user }) {
    return client({
      url: `/api/login/bursatil/request-code`,
      method: "post",
      data: {
        email: user.email,
        password: user.password,
      },
    });
  }

  function verifyTotp({ user }) {
    // 1. Renamed for clarity
    return client({
      url: `/api/login/bursatil/verify-code`, // 2. Added /api prefix
      method: "post",
      data: {
        email: user.email,
        code: user.token, // 3. Changed payload key from 'token' to 'code'
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

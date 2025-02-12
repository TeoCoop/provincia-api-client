function auth({client}) {
  function auth({user}) {
    return client({
      url: `/auth/local`,
      method: "post",
      data: {
        identifier: user.identifier,
        password: user.password
      }
    });
  }

  return {
    auth
  };
}

module.exports = auth;

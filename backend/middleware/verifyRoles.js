const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    console.log(req);
    if (!req?.roles)
      return res.status(401).json("need role authentication to access");
    const rolesArray = [...allowedRoles];
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    if (!result) return res.status(401).json("User role not autorized");
    next();
  };
};

module.exports = verifyRoles;

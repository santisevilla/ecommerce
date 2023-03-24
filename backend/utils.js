const generateToken = (user) => {
  return jwt.sing(user, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

export default generateToken;

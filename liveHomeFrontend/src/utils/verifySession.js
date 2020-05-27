import jwt from 'jsonwebtoken';

const secret = process.env.AUTH_JWT_SECRET;

const verifySesion = () => {
  const token = window.sessionStorage.getItem('jwt-token');
  if (!token) {
    return false;
  } else {
    try {
      const payload = jwt.verify(token, secret);

      if (Date.now() >= payload.exp * 1000) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      window.sessionStorage.removeItem('jwt-token');
      return false;
    }
  }
};

export default verifySesion;

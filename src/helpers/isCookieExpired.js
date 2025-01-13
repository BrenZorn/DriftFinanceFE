import Cookies from 'js-cookie';

function isCookieExpired(cookieName) {
  const cookieValue = Cookies.get(cookieName);
  if (!cookieValue) {
    console.log('Cookie not found');
    return true;
  }

  try {
    const cookie = JSON.parse(cookieValue); // Assuming the cookie contains JSON data
    const expirationDate = new Date(cookie.expiration); // Parse expiration date

    if (expirationDate < new Date()) {
      console.log('Cookie has expired');
      return true; // Cookie is expired
    }

    console.log('Cookie is valid');
    return false; // Cookie is valid
  } catch (error) {
    console.error('Error parsing cookie', error);
    return true; // Invalid cookie format
  }
}

export default isCookieExpired;
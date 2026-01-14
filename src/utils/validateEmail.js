export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  // More comprehensive email validation
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(email.trim());
};

export const validateEmailDomain = (email, allowedDomains = []) => {
  if (!validateEmail(email)) {
    return false;
  }
  
  if (allowedDomains.length === 0) {
    return true;
  }
  
  const domain = email.split('@')[1].toLowerCase();
  return allowedDomains.some(allowed => domain === allowed.toLowerCase());
};

export default validateEmail;


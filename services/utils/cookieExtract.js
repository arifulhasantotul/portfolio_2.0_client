import jwt from "jsonwebtoken";

export function extractJWT(token) {
  const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
  return decodedToken;
}

export function getCookie(name, cookie) {
  var pattern = RegExp(name + "=.[^;]*");
  var matched = cookie.match(pattern);
  if (matched) {
    var cookie = matched[0].split("=");
    return cookie[1];
  }
  return false;
}

export function currentUserData(cookieName, cookie) {
  let userData = null;
  try {
    const token = getCookie(cookieName || "portfolio_2_0", cookie);
    const decodedToken = extractJWT(token);
    userData = decodedToken;
  } catch (err) {
    userData = null;
  }
  // console.log("cookieExtract", userData);
  // console.log("cookieExtract", cookie);
  return userData;
}

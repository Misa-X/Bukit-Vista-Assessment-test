// sentTokenCookie creates a cookie which expires after one day
const sendUserIdCookie = (user_id, res) => {
    // Our token expires after one day
    const oneDayToSeconds = 24 * 60 * 60;
    res.cookie('user_id', user_id,  
    { maxAge: oneDayToSeconds,
    // You can't access these tokens in the client's javascript
      httpOnly: true,
      // Forces to use https in production
      secure: process.env.NODE_ENV === 'production'? true: false
     });
   };

   // returns an object with the cookies' name as keys
const getAppCookies = (req) => {
    // We extract the raw cookies from the request headers
    const rawCookies = req.headers.cookie.split('; ');
    // rawCookies = ['myapp=secretcookie, 'analytics_cookie=beacon;']
   
    const parsedCookies = {};
    rawCookies.forEach(rawCookie=>{
    const parsedCookie = rawCookie.split('=');
    // parsedCookie = ['myapp', 'secretcookie'], ['analytics_cookie', 'beacon']
     parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });
    return parsedCookies;
   };
   
   // Returns the value of the user_id cookie
   const getUserId = (req, res) =>  getAppCookies(req, res)['user_id'];

   // Our application store is stateful and uses a variable
const sessions = {};

const sessionHandler = (req, res, next)=> {
 // extracting the user id from the session
 let user_id = getUserId(req, res);

 // If we don't have a user_id or the session manager doesn't recognize the user_id
 // then we create a new one one
  if(!user_id || !sessions[user_id]) {
   // this should create a time based unique identifier
    user_id = uuidv1();
    sessions[user_id] = {
    cart: {}
  };
  // Clearing the cookies in case the session user_id is not valid
  res.clearCookie('user_id');
  // Returning the newly assigned cookie value
  sendUserIdCookie(user_id, res);
 }

 req.session = sessions[user_id];
 // Now in our route handlers you'll have session information in req.session
 next();
};
module.exports = {
    sendUserIdCookie,
    getAppCookies,
    sessionHandler
}
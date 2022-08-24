//Create and send token and save in the cookie .
const sendToken= (user,statusCode,res)=>{
    //Create jwt token
    const token = user.getJwtToken();
    //Options for the cookie 
    const options = {
        expires: new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*24*60*60*1000/96),
        httpOnly: true
    }
    res.cookie('token',token,options);
};

module.exports = sendToken;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
            // key  bearer  value 212jihou3hg423houig45{token}
        const token = req.headers.authorization.split(" ")[1];
            //stores the Decoded token into a constant, 
            //Made it so that that token also stores the userID
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);

        // Passed to the caller and made the decoded token available.
        req.userData = {email: decodedToken.email, userId: decodedToken.userId};
        next();
    }
    catch (error) {
        res.status(401).json({
            message: 'You are not Authenticated'
        })
    }

};
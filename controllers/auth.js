const signup = (req, res, next)=> {
    try {
        return res.status(201).json({message:"signed up"});   
    } catch (error) {
        next(error);
    }
   
};
module.exports = {
    signup
};
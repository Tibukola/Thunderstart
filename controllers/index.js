const index_get = async (req, res, next)=>{
   try{
    return res.status(200).json({message:"working fine"});
   } catch (error){
    next(error);
   }

};

// const index_post = async (req, res, next)=>{
//     console.log(req.body);
//     const test = "single string";
//     return res.status(200).json({message:"request received thanks", data: {...req.body, test}});
// };
module.exports={
    index_get,
    // index_post,
};
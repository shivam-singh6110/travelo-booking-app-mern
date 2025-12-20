const Hotel=require("../model/hotel.model");

const singleHotelHandler = async(req,res)=>{
    try {
        const {id}=req.params;
        const hotel=await Hotel.findById(id);
         res.json(hotel);
    } catch (err) {
         res.status(400).json({message:"could not found"});
    }   
}
module.exports=singleHotelHandler;
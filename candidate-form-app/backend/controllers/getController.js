const Default = require("../models/defaultModel");

exports.getDistricts = async (req, res) =>
{
    try
    {
        const {state} = req.params;
        const correctState = state.replace(/_/g, " ");
        const districts = await Default.find({state:correctState});
        
        if(districts.length === 0)
        {
            return res.status(404).json({
                status: false,
                message: "No data found in server"
            });
        }

        return res.status(200).json({
            status: true,
            data: districts,
            message: "This is the data found in server"
        });
    }
    catch(Error)
    {
        return res.status(500).json({
            status: "error",
            message:Error.message,
        });
    }
}
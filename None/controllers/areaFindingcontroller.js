const defaultSchema = require("../models/defaultPlacesModel");

exports.getAllArea = async (req, res) =>
{
    try
    {
        const {State} = req.params;
        const data = await defaultSchema.findOne({State: State});
        console.log(data);
        
        if(!data)
        {
            return res.status(404).json(
                {
                    status: false, 
                    message: "Data not found"
                }
            );
        }

        return res.status(200).json(
            {
                status: true,
                message: "Data found",
                data: data
            }
        )
    }
    catch(Eror)
    {
        return res.status(500).json(
            {
                status: false,
                message: Error.message
            }
        );
    }
};
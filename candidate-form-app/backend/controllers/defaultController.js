const Default = require("../models/defaultModel");

exports.createDefault = async (req, res) =>
{
    try
    {
        console.log("Controller OK");
        const {state, districts} = req.body;

        const defaultData = await Default.create({
            state,
            districts
        });

        return res.status(200).json(
            {
                status: true,
                message: "Entry created successfully",
                data: defaultData
            }
        );
    }
    catch(Error)
    {
        return res.status(500).json({
            status: false,
            message: Error.message
        });
    }
}
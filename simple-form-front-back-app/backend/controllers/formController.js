const Form = require("../models/formModel");

exports.createEntry = async (req, res) =>
{
    try {
        console.log(req.body);
        const {Name, Email, Age} = req.body;
        if(!Name || !Email || !Age)
        {
            return res.status(404).json({
                status: 500,
                message: "you missed a field"
            });
        }

        const formData = new Form({Name, Email, Age});
        const savedForm = await formData.save();

        return res.status(200).json({
            status: 201,
            message: "User created successfully",
            data: savedForm,
          });
    }
    catch (error) {
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
}

exports.getData = async (req, res) =>
{
    try
    {
        const formData = await Form.find({});
        if(!formData) 
        {
            return res.status(404).json(
                {
                    status: false,
                    message: "Data not found in the database"
                }
            );
        }
        return res.status(200).json({
            status: 200,
            message: "Data fetched successfully",
            data: formData,
        });
    }
    catch (error) {
        console.log("error", error);
    }
}
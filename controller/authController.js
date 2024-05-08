import userModel from "../model/useModel.js";

export const applyController = async (req, res) => {
  try {
    const { name, email, phone, level, year, intake, university, course, } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }

    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!level) {
      return res.send({ message: "Level is Required" });
    }
    if (!year) {
      return res.send({ message: "Year is Required" });
    }
    if (!intake) {
      return res.send({ message: "Intake is Required" });
    }
    if (!university) {
      return res.send({ message: "University is Required" });
    }
    if (!course) {
      return res.send({ message: "Course is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Email is already submitted",
      });
    }
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      level,
      year,
      intake,
      university,
      course,

    }).save();

    res.status(201).send({
      success: true,
      message: "Applied Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Submission",
      error,
    });
  }
};



//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
const User = require("../models/user");

const addUser = async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;

        const data = await User.create({
            name: name,
            email: email,
            phonenumber: phonenumber,
        });
        res.status(201).json({ newUserDetail: data });
    } catch (error) {
        res.status(500).json({ error: "Internal error" });
    }
};

const getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ allUsers: users });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({
            err: "Error fetching users: " + err.message,
        });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        if (userId === "undefined") {
            console.log("Id no found");
            return res.status(400).json({ err: "id is missing" });
        }
        await User.destroy({ where: { id: userId } });
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = {
    addUser,
    getUser,
    deleteUser,
};

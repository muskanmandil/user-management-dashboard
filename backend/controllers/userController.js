
const User = require('../models/User')

const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('roles', 'name');
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching users", error: error.message });
    }
}


const addUser = async (req, res) => {
    const { name, email, roles, status } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: 'User with this email already exists'
        });
    }

    try {
        const newUser = new User({
            name,
            email,
            roles,
            status
        });
        await newUser.save();
        res.status(201).json({ success: true, message: "User added" });

    } catch (error) {
        res.status(500).json({ success: false, message: "Error adding user", error: error.message });
    }

}

const editUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, roles, status } = req.body;

    try {
        const user = await User.findById(id);

        if (email && email !== user.email) {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: 'Email already in use'
                });
            }
        }

        await User.findByIdAndUpdate(
            id,
            {
                name: name || user.name,
                email: email || user.email,
                roles: roles || user.roles,
                status: status || user.status,
            },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: 'User updated'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating user", error: error.message });
    }
};


const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'User deleted'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting user',
            error: error.message
        });
    }

}

module.exports = { getUsers, addUser, editUser, deleteUser }
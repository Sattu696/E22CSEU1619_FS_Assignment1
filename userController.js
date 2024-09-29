
const User = require('./userModel');


const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user
        user = new User({
            name,
            email,
            password
        });

        await user.save();

        res.status(201).json({ msg: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createUser
};

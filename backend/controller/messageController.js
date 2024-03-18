import asyncHandler from '../middlewares/asyncHandler.js';
import Message from '../models/messageModel.js';

const registerContactUs = asyncHandler(async (req, res) => {
    try {
        
        const { firstname, lastname, email, reason, content } = req.body;
        if (!firstname || !lastname || !email || !reason || !content) {
            return res.status(400).json({ message: "All fields required" });
        }

        const message = await Message.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            reason: reason,
            content: content,
        });

        return res.status(201).json(message);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error registering contact' });
    }
});

export { registerContactUs };

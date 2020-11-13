import jwt from 'jsonwebtoken';

//key to encrypt to data to generate token
//process.env.JWT_SECRET - keep it secure file
export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d',
        }
    );
};

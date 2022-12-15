const jwt = require('jsonwebtoken')

const protectTodoRoutes = (req,res,next) => {
    const {authorization} = req.headers

    if (!authorization) {

        res.status(400).json({error: 'No authorization header present'})

    }

    const token = authorization.split(' ')[1]

    if (!token) {

        res.status(400).json({error: 'No authorization token present'})

    }

    try {
        
        const { id } = jwt.verify(token, process.env.SECRET)

        req.body.user_id = id

        next()

    } catch (error) {

        res.status(400).json({error: 'Invalid authorization token'})

    }
}

module.exports = protectTodoRoutes
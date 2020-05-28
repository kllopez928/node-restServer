const jwt = require('jsonwebtoken');

//===================
// Verifica token
//==================


let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {

        }


        req.usuario = decoded.usuario;
        next();
    })
};


//===================
// Verifica AdminRole
//==================

let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.status(401).json({
            ok: false,
            err: {
                message: 'el usuario no es administador.'
            }
        })
    }



}



module.exports = {
    verificaToken,
    verificaAdmin_Role
}
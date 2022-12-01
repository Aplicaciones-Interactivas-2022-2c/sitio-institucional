const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const nodemailer = require('nodemailer')


module.exports = {
    // We sign in
    signIn(req, res) {

        let { email, password } = req.body;

        // find the user by email
        user.findOne({
            where: {
                email: email
            }
        }).then(user => {

            // if the user does not exist
            if (!user) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {

                // if the user exists, we compare the password
                if (bcrypt.compareSync(password, user.password)) {

                    // We create a hwt token
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        user: user,
                        token: token
                    })

                } else {

                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }

            }

        }).catch(err => {
            res.status(500).json(err);
        })

    },

    // Create a new user
    signUp(req, res) {

        // Encrypt the password
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        // We create the user
        user.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            type: req.body.type
        }).then(user => {

            // Create the token
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                user: user,
                token: token
            });

        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    // Recupero de contraseña
    async forgotPassword(req, res) {
        // create reusable transporter object using the default SMTP transport
        const email = req.body.email;
        try {
            await user.findOne({ where: { email: req.body.email } }).then(async (userFound) => {
                if (!userFound) {
                    return res.status(400).json({ error: "No existe un usuario con este mail." });
                }
                const token = jwt.sign({ id: userFound.dataValues.id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '30m' });
                await userFound.update({ resetLink: token }, (err, success) => {
                    if (err) {
                        res.status(400).json({ error: "ocurrió un error" });
                    } else {
                    }
                }).then(async () => {
                    const transport = nodemailer.createTransport({
                        host: 'smtp.ethereal.email',
                        port: 587,
                        auth: {
                            user: 'jared.hyatt@ethereal.email',
                            pass: 'skBh6Cb4kSBTKwHQM'
                        }
                    });
                    const sendMail = {
                        from: "noreply@test.local",
                        to: email,
                        subject: "Recupera tu contrasena",
                        text: `sigue el link ${process.env.FRONT_URL}/change-password?token=${token}`
                    };

                    

                    await transport.sendMail(sendMail, (error, info) => {
                        if (error) {
                            console.log(error)
                        }
                        res.send('success');
                        console.log('Message sent: %s', info?.messageId)
                    });
                });
            });

        } catch (error) {
            res.status(400)
            console.log(error)
        }
    },

    async passwordReset(req, res) {
        const { token } = req.body;
        let {newPassword} = req.body;
        newPassword = bcrypt.hashSync(newPassword, Number.parseInt(authConfig.rounds));

        var decoded = jwt.verify(token, process.env.RESET_PASSWORD_KEY);

        await Uuserser.findOne({
            where: {
                resetLink: token,
                id: decoded.id
            }
        }).then((userFound) => {
            if (!userFound) {
                res.status(400).json({ error: "Token invalido." });
            }
            userFound.update({ password: newPassword }).then(() => {
                res.send('success');
            }, (error) => {
                res.status(400).json({ error: "ocurrió un error" });
            })
        })
    }

}
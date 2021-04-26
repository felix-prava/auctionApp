const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

//Load user model
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
            //Match user
            User.findOne({email: email})
                .then(user => {
                    if(!user){
                        return done(null, false, { message: "This is email is not correct!"});
                    }

                    //Match password
                    bcrypt.compare(password, user.password, (err, isMarch) => {
                        if (err)
                            throw err;
                        if (isMarch){
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Password is not correct!"});
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUSer((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUSer( (id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}
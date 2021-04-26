//Validation
const Joi = require('@hapi/joi');

//Post validation
const postValidation = (data) => {
    const schema = Joi.object({
        price: Joi.number()
            .min(4)
            .max(255)
            .required(),
        vat: Joi.string()
            .min(6)
            .max(255)
            .required(),
        bid_time_remaining: Joi.string()
            .min(3)
            .required(),
        auction_type: Joi.string()
            .min(3)
            .required(),
        //images:
            //.min(3)
            //.required(),
    });
    return schema.validate(data);
};

module.exports.postValidation = postValidation;
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const schema = Joi.object({
  url: Joi.string().required(),
  isPrivate: Joi.boolean().required(),
  languages: Joi.array().items(
    Joi.object({
      size: Joi.number().required(),
      node: Joi.object({
        name: Joi.string(),
      }),
    })
  ),
});

const validateRepo = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

export { validateRepo };

import logger from "../logger/logger.js";

export const createUser = (req, res) => {
  const { name, email } = req.body;
  logger.info(`Creating user with name: ${name}, email: ${email}`);
  res.status(201).json({
    message: "user created successfully",
    data: {
      id: 1,
      name,
      email,
    },
  });
};

export const getUsers = (req, res) => {
  logger.error("Fetching all users");
  res.json({
    message: "users fetched successfully",
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "RbEoW@example.com",
      },
    ],
  });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  logger.info(`Fetching user with id: ${id}`);
  res.json({
    message: "user fetched successfully",
    data: {
      id,
      name: "John Doe",
      email: "RbEoW@example.com",
    },
  });
};

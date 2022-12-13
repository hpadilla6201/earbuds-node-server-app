import usersModel from "./users-model.js";

export const createUser = async (user) => await usersModel.create(user);

export const findUserbyUsername = async (username) =>
  await usersModel.findOne({ username });

export const findUserByCredentials = async (username, password) =>
  await usersModel.findOne({ username, password });

export const findAllUsers = async () => await usersModel.find();

export const deleteUser = async (uid) =>
  await usersModel.find({ _id: uid }).remove().exec();

export const updateUser = async (uid, userUpdates) => {
  const { _id, ...rest } = userUpdates;
  return await usersModel.updateOne({ _id: uid }, { $set: rest });
};

export const findUserById = async (uid) =>
  await usersModel.findById(uid, { password: false });

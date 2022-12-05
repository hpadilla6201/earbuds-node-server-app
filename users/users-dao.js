import usersModel from "./users-model.js";

export const createUser = async (user) =>
    await usersModel.create(user)

export const findUserbyUsername = async (username) =>
    await usersModel.findOne({username})

export const findUserByCredentials = async (username, password) =>
    await usersModel.findOne({username, password})

export const findAllUsers = async () => 
    await usersModel.find()

export const deleteUser = async (uid) =>
    await usersModel.deleteOne({_id: uid})

export const updateUser = async (uid, userUpdates) =>
    await usersModel.updateOne({_id: uid},
        {$set: userUpdates})

export const findUserById = async (uid) =>
        await usersModel.findById(uid, {password: false})
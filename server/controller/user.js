import * as userRepository from '../data/user.js';

export async function getUsers(req, res, next) {
    const data = await userRepository.getAll();
    res.status(200).json(data);
    // res.sendStatus(200);
}

export async function getUser(req, res, next) {
    const id = req.params.id;
    const data = await userRepository.getById(id);
    res.status(200).json(data);
}
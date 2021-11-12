import express from 'express';
// import 'express-async-errors';
import { body, param } from 'express-validator';
import * as userController from '../controller/user.js';
import { validate } from '../middleware/validator.js'

const router = express.Router();

// 유효성 검사 예시
const validateExample = [
    body('text')
        .trim()
        .isLength({min: 3})
        .withMessage('text should be at least 3 characters'),
    validate,
];


router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

// router.post('/', validateExample, userController.createUser);

// router.put('/:id', validateExample, userController.updatUser);

// DELETE /tweets/:id
// router.delete(
    // '/:id',
    // [
    //     param('id').isInt().withMessage('숫자 입력'),
    //     validate
    // ], 
    // userController.deleteUser);

export default router;
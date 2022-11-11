import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { secretQuestion } from '../mocks/register.mock';
//createSms
import { createSms } from '../../src/core/utils/send-twilio'
@Controller('register')
export class RegisterController {
    constructor() {
    }

    @Get('secret-question')
    getSecretQuestion() {
        return secretQuestion;
    }

    @Post('user')
    registerUser(@Body() body) {

        const {
            documentType, nroDocument, cell,
            advisorCode, dateOfBirth, email,
            password, secretQuestion, secretResponse, identifier
        } = body;

        if (documentType && nroDocument && cell && advisorCode && dateOfBirth && email && password && secretQuestion && secretResponse && identifier) {
            return {
                message: 'Se registró correctamente',
            }
        } else {
            return {
                message: 'error',
                error: 'Faltan datos'
            }
        }
    }

    @Post('send-code')
    messageCode(@Body() body) {
        const { cell } = body;
        createSms
        try {
            if (cell) {
                return {
                    message: 'Se envió correctamente',
                }
            } else {
                return {
                    message: 'error',
                    error: 'Faltan datos'
                }
            }
        } catch (error) {
            return {
                message: 'error',
                error: 'Error en el servidor'
            }
        }
    }

    @Post('validate-code')
    validateCode(@Body() body) {
        const { code } = body;
        try {
            if (code == '123456') {
                return {
                    message: 'Se validó correctamente',
                }
            } else {
                return {
                    message: 'error',
                    error: 'Código incorrecto'
                }
            }
        } catch (error) {
            return {
                message: 'error',
                error: 'Error en el servidor'
            }
        }
    }
}
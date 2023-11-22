import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getJwtSecret(): string {
    if (!process.env.JWT_SECRET) {
        throw new Error(
            'JWT_SECRET is not defined in the environment variables',
        );
    }
    return process.env.JWT_SECRET;
}

export const createUser = async (userData: {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}) => {
    const { email, password, firstname, lastname } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { email, firstname, lastname, password: hashedPassword },
    });

    const jwtSecret = getJwtSecret();

    return jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: '24h',
    });
};

export const validateUser = async (userData: {
    email: string;
    password: string;
}) => {
    const { email, password } = userData;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        // Comparaison du mot de passe avec le hash enregistré
        throw new Error('Invalid email or password.');
    }

    const jwtSecret = getJwtSecret();

    return jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: '24h',
    });
};

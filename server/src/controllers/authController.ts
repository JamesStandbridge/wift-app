import { Request, Response } from 'express';
import { createUser, validateUser } from '../services/authService';

export const signup = async (req: Request, res: Response) => {
    try {
        const token = await createUser(req.body);
        res.status(201).json({ token });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({
                error: 'Une erreur inattendue s’est produite.',
            });
        }
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const token = await validateUser(req.body);
        res.json({ token });
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ error: error.message });
        } else {
            res.status(500).json({
                error: 'Une erreur inattendue s’est produite.',
            });
        }
    }
};

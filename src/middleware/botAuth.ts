// Bot auth middleware - accepts x-user-id header instead of JWT
import { Request, Response, NextFunction } from 'express';
import { findUserById } from '../database';

export const botAuth = (req: Request, res: Response, next: NextFunction): void => {
  const userId = req.headers['x-user-id'] as string;
  
  if (!userId) {
    res.status(401).json({
      success: false,
      error: { code: 'NO_USER_ID', message: 'x-user-id header required' }
    });
    return;
  }
  
  const user = findUserById(userId);
  if (!user) {
    res.status(404).json({
      success: false,
      error: { code: 'USER_NOT_FOUND', message: 'User not found' }
    });
    return;
  }
  
  req.user = user;
  next();
};

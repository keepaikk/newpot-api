import { Request, Response, NextFunction } from 'express';

// Bot auth middleware - accepts x-user-id header instead of JWT
export const botAuthenticate = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.headers['x-user-id'] as string;
  
  if (userId) {
    (req as any).user = { id: userId };
    (req as any).userId = userId;
    next();
    return;
  }
  
  // Fall back to JWT if no x-user-id
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    res.status(401).json({
      success: false,
      error: { code: 'NO_TOKEN', message: 'Access token required' }
    });
    return;
  }
  
  // JWT verification would go here
  next();
};

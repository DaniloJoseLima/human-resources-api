import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError } from '../../shared/helpers/api-erros'
import { UserRepository } from '../../user/repositories/userRepository'
import jwt from 'jsonwebtoken'

type JwtPayload = {
  id: string
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    throw new UnauthorizedError('Não autorizado')
  }

  try {
    const token = authHeaders.split(' ')[1]

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

    const user = await UserRepository.findById(id)

    if (!user) {
      throw new UnauthorizedError('Não autorizado')
    }

    const { password: _, ...loggedUser } = user

    req.user = loggedUser

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}

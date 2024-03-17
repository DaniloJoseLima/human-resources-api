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

  console.log("1 >>>> ", authHeaders)
  if (!authHeaders) {
    throw new UnauthorizedError('Não autorizado')
  }

  try {
    const token = authHeaders.split(' ')[1]
    console.log("2 >>>> ", token)

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload
    console.log("3 >>>> ", id)

    const user = await UserRepository.find(id)
    console.log("4 >>>> ", user)

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

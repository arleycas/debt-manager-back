import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";
@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  getUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  getUserByUserName(username: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        username
      }
    })
  }

  createUser(data: User): Promise<User> {
    return this.prisma.user.create({
      data
    });
  }

  updateUser(id: number, data: User): Promise<User> {
    return this.prisma.user.update({
      where: {
        id
      },
      data
    });
  }

  deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }

  createToken(user: User) {
    const payload = {
      user_id: user.id,
      username: user.username,
    }

    return sign(payload, process.env.SECRET_KEY_JWT)
  }

}
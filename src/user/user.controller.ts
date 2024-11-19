import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() data: User) {
    return this.userService.createUser(data);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const userFound = await this.userService.getUserById(Number(id));

    if (!userFound) throw new BadRequestException('Usuario no encontrado');

    return userFound;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      return await this.userService.deleteUser(Number(id));
    } catch (error) {
      throw new BadRequestException('No se pudo eliminar, usuario no encontrado');
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: User) {
    return this.userService.updateUser(Number(id), data);
  }
}
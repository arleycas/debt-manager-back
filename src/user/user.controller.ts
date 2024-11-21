import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";
import { hashSync, compareSync } from 'bcryptjs';
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('/register')
  async createUser(@Body() data: User) {
    try {
      data.password = hashSync(data.password, 10); // se hashea el password
      return this.userService.createUser(data);
    } catch (error) {
      console.log('Error en createUser', error);
      throw new BadRequestException(error);
    }
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

  @Post('/login')
  async loginUser(@Body() data: { username: string, password: string}) {
    try {
      const userFound = await this.userService.getUserByUserName(data.username);
      
      if (!userFound) throw new BadRequestException('Usuario no encontrado');
      
      const eq = compareSync(data.password, userFound.password);
      if (!eq) throw new BadRequestException('Error en usuario o contraseña');
  
      return { message: 'Login correcto', token: this.userService.createToken(userFound) }
    } catch (error) {
      console.log('Error en loginUser', error);
      
      throw new BadRequestException(error); 
    }
  }
}
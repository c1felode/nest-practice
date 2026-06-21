import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.createUser(body)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.removeUser(+id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/orm/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id) {
    const user = await this.userRepository.findOneBy({id});
    if (!user) {
      throw new NotFoundException('User not found with this ID')
    }

    return user
  }

  async removeUser(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`User with ID #${id} does not exist`);
    }
    return `This action removes a #${id} user`;
  }

  createUser(body: CreateUserDto) {
    const name = body.name
    const email = body.email
    const user = this.userRepository.create({name, email})
    return this.userRepository.save(user)
  }
}

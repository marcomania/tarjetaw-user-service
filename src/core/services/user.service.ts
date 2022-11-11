import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { DocumentType } from '../entities/document-type';
import { CreateUserDto } from '../dto/create-user.dto';
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(DocumentType)
    private readonly typeRepository: Repository<DocumentType>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    await this.userRepository.findOne({
      where: {
        id
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

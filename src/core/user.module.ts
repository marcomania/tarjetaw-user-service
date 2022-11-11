import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './services/user.service';
import { User } from './entities/user';
import { UserController } from '../controllers/user.controller';
import { DocumentType } from './entities/document-type';
@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User, DocumentType]),
  ],
  exports: [TypeOrmModule],
})
export class UserModule { }

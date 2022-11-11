import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { UserController } from './controllers/user.controller';
//import { ConfigModule } from '@nestjs/config';
import { UserModule } from './core/user.module';
@Module({
  imports: [
    //ConfigModule.forRoot(),
    //TypeOrmModule.forRoot(configService.getTypeOrmConfig()), 
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
// para probar en local

export class AppModule { }

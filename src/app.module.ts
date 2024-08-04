import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entities/User';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'asdf',
      database: 'google',
      entities: [User],
      synchronize: true,
    }),
  PassportModule.register({session:true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

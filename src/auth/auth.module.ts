import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { SessionSerializer } from './utils/Serializer';

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    SessionSerializer,
    { provide: 'AUTH_SERVICE', useClass: AuthService },
  ],
})
export class AuthModule {}

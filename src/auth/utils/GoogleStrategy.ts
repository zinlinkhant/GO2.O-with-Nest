import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService
    ) {
        super({
            clientID: '269298861254-1pov1nsko8h5dam0q2vbo6ugquscbj53.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3001/api/auth/google/redirect',
            scope: ['profile', 'email'],
        });
    }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    const user = await this.authService.validateUser({
      email: profile.emails[0].value,
      displayName: profile.displayName,
    });
    console.log('Validate');
    console.log(user);
    return user || null;
  }
}

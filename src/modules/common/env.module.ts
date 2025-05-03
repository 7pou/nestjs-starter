import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.env.' + process.env.NODE_ENV, '.env'],
      load: [...Object.values(config)],
    }),
  ],
})
export class EnvModule {}

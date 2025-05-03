import { Module } from '@nestjs/common';
import { EnvModule } from './modules/common/env.module';
import { DatabaseModule } from './modules/common/database.module';

@Module({
  imports: [EnvModule, DatabaseModule],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from './config.service';

@Module({
  imports: [ConfigModule],
  providers: [DatabaseConfigService],
})
export class DatabaseConfigModule {}

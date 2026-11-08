import { Module } from '@nestjs/common';
import { LogsModule } from '../logs/logs.module';
import { IngestController } from './ingest.controller';

@Module({
  imports: [LogsModule],
  controllers: [IngestController],
})
export class IngestModule {}
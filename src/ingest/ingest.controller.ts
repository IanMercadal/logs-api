import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentApp } from '../common/decorators/current-app.decorator';
import { LogsService } from '../logs/logs.service';
import { CreateLogDto } from '../logs/dto/create-log.dto';

@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('ingest')
export class IngestController {
  constructor(private readonly logs: LogsService) {}

  @Post('logs')
  create(@CurrentApp() app: string, @Body() dto: CreateLogDto) {
    return this.logs.create(app, dto);
  }
}
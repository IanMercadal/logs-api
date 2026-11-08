import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly keys: Map<string, string>;

  constructor(config: ConfigService) {
    this.keys = new Map(
      (config.get<string>('API_KEYS') ?? '')
        .split(',')
        .filter(Boolean)
        .map((pair) => pair.split(':') as [string, string]),
    );
  }

  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest();
    const app = this.keys.get(req.headers['x-api-key']);
    if (!app) throw new UnauthorizedException();
    req.sourceApp = app; // no usar req.app: ya existe en Express
    return true;
  }
}
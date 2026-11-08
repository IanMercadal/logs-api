import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentApp = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): string =>
    ctx.switchToHttp().getRequest().sourceApp,
);
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { JTWCheckMiddleware } from './common/middleware/jtw-check.middleware';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {

  // middleware se ejecuta en todas las peticiones a todos los endpoints menos en user/login
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(JTWCheckMiddleware)
    .exclude({
      path: 'user/login',
      method: RequestMethod.POST
    })
    .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AlarmsModule } from './alarms/application/alarms.module';
import { AlarmsInfrastructureModule } from './alarms/infrastructure/alarms-infrastructure.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IApplicationBootstrapOptions } from './common/application-bootstrap-options.interface';
import { CoreModule } from './core/core.module';
import { RequestMiddleware } from './common/request.middleware';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RequestMiddleware)
      .forRoutes({
        path: '/uploadExportFile',
        method: RequestMethod.POST,
      })
      .apply(RequestMiddleware)
      .forRoutes('*');
  }

  static register(options: IApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlarmsModule.withInfrastucture(
          AlarmsInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}

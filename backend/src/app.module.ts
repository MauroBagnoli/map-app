import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DeviceModule } from './modules/devices/device.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    DeviceModule,
  ],
})

export class AppModule {}

import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { DeviceResolver } from './device.resolver';

@Module({
  providers: [ DeviceService, DeviceResolver ],
  exports: [ DeviceService ],
  controllers: [ DeviceController ],
})
export class DeviceModule { }

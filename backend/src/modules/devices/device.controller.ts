import { Controller, Get } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('devices')
export class DeviceController {

  constructor(
    private readonly deviceService: DeviceService,
  ) {
  }

  @Get()
  getAllDevices() {
    const devices = this.deviceService.findAll();

    return { devices };
  }
}

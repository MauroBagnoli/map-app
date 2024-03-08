import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateDeviceInput, Device } from './device.model';

@Injectable()
export class DeviceService {
  private readonly devices: Device[];

  constructor() {
    this.devices = Array.from({ length: 10 }, (_, index) => this.mockDevice(index));
  }

  private mockDevice(index: number): Device {
    return {
      id: index + 1,
      name: `Mock Device ${index + 1}`,
      latitude: 40.42 + (index * 0.01),
      longitude: -3.7 + (index * 0.01),
      lastConnection: new Date(),
      mobileNumber: `98787 ${index + 1}`
    };
  }

  findAll() {
    return this.devices;
  }

  createOne(device: CreateDeviceInput) {
    const lastId = this.devices[this.devices.length - 1].id;
    const newDevice = { ...device, id: lastId + 1, lastConnection: new Date() };
    this.devices.push(newDevice)
    return newDevice;
  }
}

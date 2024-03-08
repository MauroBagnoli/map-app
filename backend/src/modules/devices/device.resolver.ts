import { Int, Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { DeviceService } from './device.service';
import { CreateDeviceInput, Device } from './device.model';

@Resolver(of => DeviceResolver)
export class DeviceResolver {
  constructor(
    private readonly deviceService: DeviceService,
  ) { }

  @Query(returns => [Device], { name: 'devices', nullable: false })
  async getDevices() {
    return this.deviceService.findAll();
  }

  @Mutation(returns => Device)
  createDevice(@Args('input') input: CreateDeviceInput): Device {
    const result = this.deviceService.createOne(input);
    return result;
  }
}

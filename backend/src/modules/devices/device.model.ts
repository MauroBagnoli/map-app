import { InputType, ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Device {
    @Field(type => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    mobileNumber: string;

    @Field()
    lastConnection: Date | null;

    @Field()
    latitude: number;

    @Field()
    longitude: number;
}

@InputType()
export class CreateDeviceInput {
    @Field()
    name: string;

    @Field()
    mobileNumber: string;

    @Field(() => Float)
    latitude: number;

    @Field(() => Float)
    longitude: number;
}

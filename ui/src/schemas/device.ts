import { z } from "zod"

export const newDeviceSchema = z.object({
    name: z.string(),
    mobileNumber: z.string(),
    latitude: z.string(),
    longitude: z.string(),
});

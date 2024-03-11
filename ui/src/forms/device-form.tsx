"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DeviceContext } from "@/context/device-context"

import { newDeviceSchema } from "@/schemas/device"
import { createDevice } from "@/services/mutations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export function DeviceForm({ setDialogOpen }: { setDialogOpen: (value: boolean) => void }) {
    const { fetchDevices } = useContext(DeviceContext);

    const form = useForm<z.infer<typeof newDeviceSchema>>({
        resolver: zodResolver(newDeviceSchema),
        defaultValues: {
            name: '',
            mobileNumber: '',
            latitude: '',
            longitude: '',
        },
    })

    async function onSubmit(values: z.infer<typeof newDeviceSchema>) {
        await createDevice({ ...values, latitude: parseFloat(values.latitude), longitude: parseFloat(values.longitude) })
        await fetchDevices();
        setDialogOpen(false)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input id="name" type="string" className="col-span-3" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mobile number</FormLabel>
                            <FormControl>
                                <Input id="mobileNumber" type="string" className="col-span-3" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="latitude"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Latitude</FormLabel>
                            <FormControl>
                                <Input id="latitude" type="number" className="col-span-3" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="longitude"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Longitude</FormLabel>
                            <FormControl>
                                <Input id="longitude" type="number" className="col-span-3" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="button"
                    className="mr-4"
                    variant='outline'
                    onClick={() => setDialogOpen(false)}>
                    Close
                </Button>
                <Button type="submit">Submit</Button>
            </form>
        </Form>

    )
}

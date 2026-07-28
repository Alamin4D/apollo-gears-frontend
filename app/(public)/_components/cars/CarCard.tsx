import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car } from "@/lib/type";
import Link from "next/link";

interface Props {
    car: Car;
}

export default function CarCard({ car }: Props) {
    return (
        <Card className="overflow-hidden rounded-2xl border bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <div className="relative h-52 w-full">
                <Image
                    unoptimized
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover hover:scale-150 duration-300"
                />
            </div>

            <CardContent className="space-y-3 p-5">
                <h2 className="text-xl font-semibold">{car.name}</h2>

                <p className="text-sm text-muted-foreground">
                    {car.brand} • {car.model}
                </p>

                <div className="flex justify-between text-sm">
                    <span>⭐ {car.rating}</span>
                    <span>{car.fuelType}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span>{car.passengerCapacity} Seats</span>
                    <span>{car.color}</span>
                </div>

                <Link href={`/cars/${car.id}`}>
                    <Button className="w-full">
                        View Details
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}

import { getCars } from "../../_actions/getCars";
import CarCard from "./CarCard";

export default async function CarList() {
    const cars = await getCars();
    console.log(cars)
    

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cars.map((car: any) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
}
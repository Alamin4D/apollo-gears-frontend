import { CarDetails as CarDetailsType } from "@/lib/type";
import Image from "next/image";

type Props = {
  car: CarDetailsType;
};

const CarDetails = ({ car }: Props) => {
  return (
    <section className="container mx-auto py-10">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="relative h-[500px]">
          <Image
            src={car.image}
            alt={car.name}
            unoptimized
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                {car.name}
              </h1>

              <p className="text-gray-500">
                {car.brand} • {car.model}
              </p>
            </div>

            <span className="rounded bg-green-100 px-4 py-2 font-semibold text-green-700">
              {car.condition}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <InfoCard title="Fuel" value={car.fuelType} />
            <InfoCard
              title="Passengers"
              value={car.passengerCapacity}
            />
            <InfoCard title="Color" value={car.color} />
            <InfoCard
              title="Rating"
              value={`${car.rating} ⭐`}
            />
            <InfoCard
              title="Total Rents"
              value={car.rents.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;

type InfoCardProps = {
  title: string;
  value: string | number;
};

const InfoCard = ({
  title,
  value,
}: InfoCardProps) => (
  <div className="rounded-lg border p-4">
    <p className="text-sm text-gray-500">
      {title}
    </p>

    <h3 className="text-lg font-semibold">
      {value}
    </h3>
  </div>
);
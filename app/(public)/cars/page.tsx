
import CarList from "../_components/cars/CarList";
// import { CarsSearchBar } from "../_components/cars/CarsSearchBar";

export default function CarsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Available Cars
        </h1>

        {/* <CarsSearchBar /> */}
      </div>


      <CarList />
    </section>
  );
}
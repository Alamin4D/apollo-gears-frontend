import { getCarById } from "../../_actions/getCarById";
import CarDetails from "../../_components/cars/CarDetails";


type Props = {
  params: Promise<{ id: string }>;
};

const CarsById = async ({ params }: Props) => {
  const { id } = await params;

  const car = await getCarById(id);

  return <CarDetails car={car} />;
};

export default CarsById;
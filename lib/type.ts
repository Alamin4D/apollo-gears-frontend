// =============================
// Generic API Response
// =============================

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// =============================
// Rent
// =============================

export interface Rent {
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
}

// =============================
// Car
// =============================

export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  rating: number;
  fuelType: string;
  passengerCapacity: number;
  color: string;
  condition: string;
  createdAt: string;
  updatedAt: string;
}

// =============================
// Car Details
// =============================

export interface CarDetails extends Car {
  rents: Rent[];
}

// =============================
// API Types
// =============================

export type CarsResponse = ApiResponse<Car[]>;
export type CarDetailsResponse = ApiResponse<CarDetails>;
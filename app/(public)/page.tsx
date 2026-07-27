import MotionCar from "@/components/page/home/MotionCar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <Card>
        <CardContent className="flex flex-col-reverse items-center gap-10 py-10 lg:flex-row lg:py-20">
          {/* Left */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
              Explore the Finest{" "}
              <span className="text-red-500">Global</span> Offers
            </h1>

            <p className="mt-5 text-muted-foreground lg:text-lg">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Book Now</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2">
            <MotionCar />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
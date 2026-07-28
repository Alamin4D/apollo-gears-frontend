export const getCarById = async (id: string) => {
    const res = await fetch(`http://localhost:5000/api/v1/cars/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch car");
    }

    const data = await res.json();

    return data.data;
}
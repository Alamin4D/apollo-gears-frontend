export const getCars = async () => {
    const res = await fetch("http://localhost:5000/api/v1/cars", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch cars");
    }

    const result = await res.json();
    return result.data

}
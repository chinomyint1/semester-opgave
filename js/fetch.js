export async function fetchProducts() {
    try {
        const response = await fetch('data/activities.json');
        const data = await response.json();
        return data.data;
        

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}
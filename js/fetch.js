export async function fetchProducts() {
    try {
        const response = await fetch('https://glamping-rqu9j.ondigitalocean.app/activities/');
        const data = await response.json();
        return data.data;
        

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}
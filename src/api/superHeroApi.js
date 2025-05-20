const BASE_URL = 'https://akabab.github.io/superhero-api/api'

export async function fetchSuperHeroes() {
    try {
        var url = await fetch(`${BASE_URL}/all.json`);
        if (url.ok) {
            const data = await url.json();
            return data;
        }
        throw new Error('Network response was not ok');
    } catch (error) {
        console.error('Error fetching superheroes:', error);
        throw error;
    }
}

export async function fetchSuperHeroById(id) {
    try {
        var url = await fetch(`${BASE_URL}/id/${id}.json`);
        if (url.ok) {
            const data = await url.json();
            return data;
        }
        throw new Error('Network response was not ok');
    } catch (error) {
        console.error('Error fetching superhero by ID:', error, url);
        throw error;
    }
}
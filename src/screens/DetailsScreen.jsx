import { ScrollView } from "react-native-web";
import { fetchSuperHeroById } from "../api/superHeroApi";
import { useEffect, useState } from "react";
import DetailsCard from "../components/characterDetails";


export default function DetailsScreen({ route }){

    const { id } = route.params;
    const [character, setCharacter] = useState(null);

    
        const fetchCharacter = async () => {
            try {
                const response = await fetchSuperHeroById(id);
                if (response) {
                    setCharacter(response);
                } else {
                    console.error('Error fetching character:', response);
                }
            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };

        fetchCharacter();

    return (
        <ScrollView>
            <DetailsCard character={character} />
        </ScrollView>
    )
}
import { Text, View } from "react-native";

export default function DetailsCard({ character }) {
    if (!character) {
        return null; // or a loading spinner
    }

    return (
        <View>
            <Text>Nombre profesional: {character.name}</Text>
            <Text>Nombre original: {character.biography.fullName}</Text>
            <Text>Alias: {character.biography.aliases}</Text>
            <Text>Género: {character.appearance.race} </Text>
        </View>
    )
}
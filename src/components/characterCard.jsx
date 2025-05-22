import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";
import { TouchableOpacity } from "react-native";

export default function CharacterCard({ character }) {
    const navigation = useNavigation();
    return (
        <View style={styles.containerCard}>
                <TouchableOpacity style={styles.idImg} onPress={() => navigation.navigate('Detalles de personajes', { id: character.id })}>
                    <Image source={{uri: character.images.lg}} style={styles.image} />
                    <Text style={styles.textID}>#{character.id}</Text>
                </TouchableOpacity>
            <Text style={styles.textCard}>Nombre profesional: {character.name}</Text>
            <Text style={styles.textCard}>Nombre original: {character.biography.fullName}</Text>
        </View>
  );
}
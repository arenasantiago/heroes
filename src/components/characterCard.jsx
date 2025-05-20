import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";
import { TouchableOpacity } from "react-native";

export default function CharacterCard({ character }) {
    const navigation = useNavigation();
    return (
        <View style={styles.containerCard}>
            <View style={styles.idImg}>
                <TouchableOpacity onPress={() => navigation.navigate('Details', { id: character.id })}>
                    <Image source={{uri: character.images.lg}} style={styles.image} />
                    <Text style={styles.textID}>#{character.id}</Text>
                </TouchableOpacity>
            </View>
            <Text>Nombre profesional: {character.name}</Text>
            <Text>Nombre original: {character.biography.fullName}</Text>
        </View>
  );
}
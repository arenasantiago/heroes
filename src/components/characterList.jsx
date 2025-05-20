import { View } from "react-native";
import CharacterCard from "./characterCard";
import { ScrollView } from "react-native";
import styles from "../styles/styles";

export default function CharacterList({ characters }) {
  return (
    <ScrollView>
      <View style={styles.grid}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </View>
    </ScrollView>
    
  );
}
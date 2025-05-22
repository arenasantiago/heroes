import { Image, Text, View } from "react-native";
import styles from "../styles/styles";
import { useEffect, useState } from "react";
import {Vibrant} from "node-vibrant/browser";

export default function DetailsCard({ character }) {
    if (!character) {
        return null; // or a loading spinner
    }
    const [color, setColor] = useState('#cccccc');
    const [color2, setColor2] = useState('#cccccc');
    useEffect(() => {
    Vibrant.from(character.images.lg).getPalette()
      .then(palette => {
        console.log(palette); // Te muestra todos los colores
        setColor2(palette.Muted?.rgb || '#cccccc');
        setColor(palette.LightVibrant?.hex || '#cccccc');
      })
    }, [character.images.lg]);

    return (
        <View style={[styles.containerDetails, { backgroundColor: color },{shadowColor: color2}]}>
            <View style={styles.idImage}>
                <Image source={{uri: character.images.lg}} style={styles.images}/>
            </View>
            <Text style={styles.textDetails}>Nombre: {character.name}</Text>
            <Text style={styles.textDetails}>Raza: {character.appearance.race}</Text>
            <View style={styles.containerStats}>
                <Text style={styles.textDetails}>Status</Text>
                <Text style={styles.textDetails}>Inteligencia:  {character.powerstats.intelligence}</Text>
                <Text style={styles.textDetails}>Fuerza:  {character.powerstats.strength}</Text>
                <Text style={styles.textDetails}>Velocidad:  {character.powerstats.speed}</Text>
                <Text style={styles.textDetails}>Durabilidad:  {character.powerstats.durability}</Text>
                <Text style={styles.textDetails}>Poder:  {character.powerstats.power}</Text>
                <Text style={styles.textDetails}>Combate:  {character.powerstats.combat}</Text>
            </View>    
        </View>
        
    );
}
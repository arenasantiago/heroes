import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";


const ScreenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    text: {
        fontSize: 25,
        marginBottom: 10,
    },
    textID: {
      fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,  
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 10,
    },
    containerCard: {
        width: ScreenWidth / 4 - 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 10,
        margin: 10,
        marginRight: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    idImg:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    grid:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
});

export default styles;
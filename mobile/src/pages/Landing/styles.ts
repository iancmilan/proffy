import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1, // esse flex: 1 serve para que o elemento ocupe todo o espaço que ele tem disponível
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    banner: {
        //criamos esse estilo porque a largura das imagens é sempre o tamanho original delas, ela não se adapta ao tamanho que ela tem dispoível
        //colocamos a largura de 100%, ou seja, o tamanho disponível que ela tem ali pra ocupar de largura
        width: '100%',
        //esse resizeMode: contain vai redimencionar o tamanho da imagem proporcionalmente a largura ou altura que a gente colocou, porém todo oconteúdo da imagem tem que estar visível
        resizeMode: 'contain',
        // se colocassemos resizeMode: cover a imagem seria cortada
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button : {
        height: 150,
        width: '40%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 15
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    },
});

export default styles;
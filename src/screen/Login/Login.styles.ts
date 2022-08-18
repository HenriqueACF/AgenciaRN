import {StyleSheet} from "react-native";

// @ts-ignore
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    darkbg:{
        backgroundColor:'#333'
    },
    logoArea:{
        alignSelf:'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#333',
        borderRadius: 20,
        width: '90%',
        height:'50%',
        margin:20
    },
    logo:{

    },
    form:{
        paddingTop: 40,
        margin: 10,
        width:'95%',
        justifyContent: 'center'
    },
    inputUser:{
        backgroundColor:'#ccc',
        fontSize:19,
        padding:7,
        marginBottom:15
    },
    inputPassword:{
        backgroundColor:'#ccc',
        fontSize:19,
        padding:7,
        marginBottom:15
    },
    btnLogin:{
        padding:12,
        backgroundColor: '#ff4700',
        alignSelf:'center',
        borderRadius:5
    },
    btnText:{
        fontWeight:'bold',
        fontSize:22
    },
    btnRegister:{
        paddingTop:20,
        alignSelf: 'center',
        color:'#000'
    },
    textRegister:{
        color: '#000',
        fontWeight: 'bold'
    }
})

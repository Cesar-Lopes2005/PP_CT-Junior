import { setStatusBarBackgroundColor } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Button } from 'react-native'
import { Feather } from '@expo/vector-icons'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight+22: 60;

export default function Header({ name}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity activeOpacity={0.9} style= {styles.buttonUser}>
                    <Feather name="user" size ={27} color={"#000000"}/>
                </TouchableOpacity>
                <Text style={styles.username}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#808080',
        paddingTop: StatusBarHeight,
        flexDirection:"row",
        paddingStart:16,
        paddingEnd: 16,
        paddingBottom:20,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
    },
    username:{
        paddingHorizontal:10,
        fontSize:18,
        color: 'fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        width:44,
        height: 44,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 44/2
    },
    plus:{
        width:44,
        height: 44,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 'auto'
    }

})
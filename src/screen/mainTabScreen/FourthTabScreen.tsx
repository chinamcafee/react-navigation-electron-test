import React, {useEffect, useState} from 'react';
import { StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Div,Text } from '~/uiLib/responsiveMagnus';

export default function FourthTabScreen() {
    return (
        <Div h={"100%"} w={'100%'} justifyContent='center' alignItems='center'>
            <Text fontSize={20}>FourthTabScreen</Text>

        </Div>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});
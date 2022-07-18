import React from "react";
import {View} from 'react-native';
import { Button } from "react-native";

function HomeScreen({navigation}) {
    return (
        <View>
            <Button
            title='Detail 1열기'
            onPress={() => navigation.push('Detail',{id:1})}
            />
            <Button
            title='Detail 2열기'
            onPress={() => navigation.push('Detail',{id:2})}
            />
            <Button
            title='Detail 3열기'
            onPress={() => navigation.push('Detail',{id:3})}
            />
        </View>
    );
}



export default HomeScreen;
import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import { Button } from "react-native";



function DetailScreen({route,navigation}) {
    return(
        <View style={styles.block}>
            <Text style={styles.text}>id:{route.params.id}</Text>
            <Button
                title="다음"
                onPress={()=>navigation.push('Detail',{id:route.params.id+1})}
            />
            <Button
                title="뒤로가기"
                onPress={()=>navigation.goBack()}
            />
            <Button
                title="처음으로"
                onPress={()=>navigation.popToTop()}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    block:{
        margin:50,
    },
    text:{
        testSize:24,
    },
});

export default DetailScreen;
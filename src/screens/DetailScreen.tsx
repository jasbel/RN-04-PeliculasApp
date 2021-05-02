import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const DetailScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>DetailScreen</Text>
            <Button
                title='ir Home'
                onPress={()=>navigation.navigate('HomeScreen')}
            />
        </View>
    )
}

export default DetailScreen;
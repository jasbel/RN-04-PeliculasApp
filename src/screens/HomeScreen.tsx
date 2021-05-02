import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Text, View } from 'react-native';

const HomeScreen = () => {
    
    const navigation = useNavigation();

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button 
                title='ir detalle'
                onPress={()=>navigation.navigate('DetailScreen')}
            />
        </View>
    )
}

export default HomeScreen;
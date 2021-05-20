import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {

};

const DetailScreen = (props: Props) => {

    const { route } = props
    const movie = route.params as Movie ;
    const { title } = movie

    console.log(movie.title);

    const navigation = useNavigation();

    return (
        <View>
            <Text>{title}</Text>
            <Button
                title='ir Home'
                onPress={()=>navigation.navigate('HomeScreen')}
            />
        </View>
    )
}

export default DetailScreen;
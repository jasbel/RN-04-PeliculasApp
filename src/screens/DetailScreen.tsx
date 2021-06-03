import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {};

const DetailScreen = (props: Props) => {

    const { route, navigation } = props
    const movie = route.params as Movie ;
    const { title, original_title } = movie

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{uri}}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.marginContainer} >
                <Text style={styles.subTitle} >{original_title}</Text>
                <Text style={styles.title} >{title}</Text>
                
            </View>

            {/* <View style={ styles.marginContainer }> */}
                { isLoading ?
                <ActivityIndicator
                    size={30}
                    color='grey'
                    style={{marginTop: 20}}
                />
                :
                <MovieDetails
                    movieFull= {movieFull!}
                    cast= {cast}
                />
                }
            {/* </View> */}

            <TouchableOpacity 
                onPress={() => navigation.pop()}
                style={styles.backButton}
            >
                <Icon
                    color='white'
                    name="arrow-back-outline"
                    size={50}
                    
                />
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex:1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 9,
        elevation: 9,
        top: 10,
        left: 10,
        backgroundColor: '#eee8',
        borderRadius: 100,
    }

})

export default DetailScreen;
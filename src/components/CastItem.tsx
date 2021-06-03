import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}

const CastItem = (props: Props) => {
    const {actor} = props;

    const uri =`https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.container} >
            {
                actor.profile_path &&
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            }
            
            <View style= {styles.actor}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
                <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
    
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: { 
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        marginRight: 20,
        paddingRight: 15,
        height: 50,
    },
    image: {width: 50, height: 50, borderRadius: 10},
    actor: {
        marginLeft: 10,
        marginTop: 5,
    }
})

export default CastItem;
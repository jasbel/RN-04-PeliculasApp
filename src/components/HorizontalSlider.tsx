import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movie: Movie[];
}

export const HorizontalSlider = (props: Props) => {
  const {title, movie} = props;

  {
    /* Peliculas populares */
  }
  return (
    <View style={{ height: (!!title) ?  210 : 170}}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}
      <FlatList
        data={movie}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={100} height={150} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

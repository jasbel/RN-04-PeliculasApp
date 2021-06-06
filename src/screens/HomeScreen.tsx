import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColours';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';


// const windowWidth = Dimensions.get('window').width; //or
const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContext)

  // const navigation = useNavigation();

  const getPosterColors = async ( index: number ) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`;
    
    const [primary = 'green', secondary = 'orange']  =  await getImageColors(uri);

    setMainColors({primary, secondary})

    console.log({primary});
    console.log({secondary});
    
    
  }

  useEffect(() => {
    if(nowPlaying.length > 0) getPosterColors(0)
  }, [nowPlaying])

  if (isLoading) {
    // if (true) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator
          color="blue"
          size={40}
        />
      </View>
    )
  }

  return (
    <GradientBackground>
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>

        {/* Carousel Principal */}
        <View style={{ height: 380 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={250}
            inactiveSlideOpacity={0.9}
            onSnapToItem={ index => getPosterColors( index ) }
          />
        </View>

        <HorizontalSlider
          title="Popular"
          movie={popular}
        />
        <HorizontalSlider
          title="Top Rated"
          movie={topRated}
        />
        <HorizontalSlider
          title="Upcoming"
          movie={upComing}
        />

        {/* <Button
                title='ir detalle'
                onPress={()=>navigation.navigate('DetailScreen')}
            /> */}
      </View>
    </ScrollView>
    </GradientBackground>
  )
}

export default HomeScreen;
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';


// const windowWidth = Dimensions.get('window').width; //or
const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  const navigation = useNavigation();

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
  )
}

export default HomeScreen;
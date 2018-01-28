/**
 * Created by austin on 27/01/2018.
 */
import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


// Create a component
const AlbumDetail = ({ data })=> {
  const {title, artist, thumbnail_image, image, url }= data;
  const {
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

  return (
      <Card >
        <CardSection>
          <View style={ thumbnailContainerStyle }>
            <Image
                source={{uri: thumbnail_image }}
                style={ thumbnailStyle}
            />
          </View>
          <View style={ headerContentStyle } >
            <Text style={ headerTextStyle } >Album: { title } </Text>
            <Text >Artist: { artist }</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
              source={{uri: image}}
              style={ imageStyle }
          />
        </CardSection>

        <CardSection>
          <Button onPress={()=> Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle:{
    height: 50,
    width: 50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

// export
export default AlbumDetail;
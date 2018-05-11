import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
//props.album.thumbnail_image -> thumbnail_image
//props.album.title -> title
  const { title, artist, thumbnail_image, image } = props.album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

//Image tag need image width, height to be shown.
  return (
    <Card>
     <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
          style={thumbnailStyle}
          source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
     </CardSection>
     <CardSection>
      <Image
          style={imageStyle}
          source={{ uri: image }}
      />
     </CardSection>
     <CardSection>
      <Button />
     </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
//image all the way to right and left side.
  imageStyle: {
    height: 300,
    flex: 1, //flex: 1 -> take all scope
    width: null
  }
};
export default AlbumDetail;

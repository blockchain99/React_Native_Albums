import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
//props.album.thumbnail_image -> thumbnail_image
//props.album.title -> title
  const { title, artist, thumbnail_image } = props.album;
//Image tag need image width, height to appear in browser.
  return (
    <Card>
     <CardSection>
      <View>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={styles.headerContentStyle}>
        <Text>{title}</Text>
        <Text>{artist}</Text>
      </View>
     </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};
export default AlbumDetail;

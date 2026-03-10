import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
  imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;  
}

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 440,
    borderRadius: 20,
    flex: 1,
  },
});

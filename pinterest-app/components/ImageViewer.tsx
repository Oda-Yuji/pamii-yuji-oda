import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
  imgSource: ImageSourcePropType;
  imgSource2: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image}/>;
}

const styles = StyleSheet.create({
  image: {
    width: '48%',
    height: 350,
    borderRadius: 20,
    marginBottom: 10,
    padding: 50,
  },
});

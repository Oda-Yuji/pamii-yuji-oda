import ImageViewer from '@/components/ImageViewer';
import { ScrollView, StyleSheet, View } from "react-native";

const Img1 = { src: require('@/assets/images/img1.jpg'), height: 350 };
const Img2 = { src: require('@/assets/images/img2.jpg'), height: 250 };
const Img3 = { src: require('@/assets/images/img3.jpg'), height: 300 };
const Img4 = { src: require('@/assets/images/img4.jpg'), height: 200 };

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={Img1} height={Img1.height}/>
        <ImageViewer imgSource={Img2} height={Img2.height}/>
        <ImageViewer imgSource={Img3} height={Img3.height}/>
        <ImageViewer imgSource={Img4} height={Img4.height}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 10,
    padding: 10,
    marginTop: -10,
    marginRight: 0,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
});
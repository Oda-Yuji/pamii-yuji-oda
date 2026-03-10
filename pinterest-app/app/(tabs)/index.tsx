import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, View } from "react-native";

const Img1 = require('@/assets/images/img1.jpg');
const Img2 = require('@/assets/images/img2.jpg');
const Img3 = require('@/assets/images/img3.jpg');
const Img4 = require('@/assets/images/img4.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={Img1}/>
        <ImageViewer imgSource={Img2}/>
        <ImageViewer imgSource={Img3}/>
        <ImageViewer imgSource={Img4}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
});
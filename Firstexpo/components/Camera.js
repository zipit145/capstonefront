import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import { Permissions } from 'expo-permissions';
import { Camera } from 'expo-camera';
import RNTesseractOcr from 'react-native-tesseract-ocr';
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    capture: {
      width: 70,
      height: 70,
      borderRadius: 35,
      borderWidth: 5,
      borderColor: '#FFF',
      marginBottom: 15,
    },
    cancel: {
      position: 'absolute',
      right: 20,
      top: 20,
      backgroundColor: 'transparent',
      color: '#FFF',
      fontWeight: '600',
      fontSize: 17,
    }
  });

export default class Camera1 extends React.Component {
    
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    path: null,
  };
  captureText() {
    RNTesseractOcr.recognize(imgPath, lang, tessOptions)
        .then((result) => {
            this.setState({ ocrResult: result });
            console.log("OCR Result: ", result);
        })
        .catch((err) => {
            console.log("OCR Error: ", err);
        })
        .done();
  }

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      this.setState({ path: data.uri });
      // this.props.updateImage(data.uri);
      // console.log('Path to image: ' + data.uri);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  renderCamera() {
    return (
    <View>
        <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        flashMode={Camera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      >
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
      </Camera>
    </View>

    );
  }

  renderImage() {
    return (
      <View>
          <Text>Here</Text>
        <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Cancel
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
//   snap = async () => {
//     if (this.camera) {
//         this.camera
//         .takePictureAsync()
//         .then(data => {
//             this.setState({photo: data.uri})
//         });
//     }
//   };
 
//   async componentWillMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//   }
//   renderImage() {
//     return (
//       <View>
//           <Text>here</Text>
//         <Image
//           source={{ uri: this.state.photo }}
//         />
//         <Text
//           onPress={() => this.setState({ photo: null })}
//         >Cancel
//         </Text>
//       </View>
//     );
//   }
//   renderCamera() {
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//       return <View />;
//     } else if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     } else {
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={this.state.type}   ref={ref => {this.camera = ref;}}>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type:
//                       this.state.type === Camera.Constants.Type.back
//                         ? Camera.Constants.Type.front
//                         : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//           <Button             
//           title="Take this image"
//             onPress={() => this.snap()}></Button>
//         </View>
//       );
//     }
//   }
//   render() {
//     return(
//         <View>
//             {this.state.photo ? this.renderImage() : this.renderCamera()}
//         </View>
//     )
//   }
}
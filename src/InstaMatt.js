import React from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';


const InstaMatt = () => {
	return (
		<View style={styles.container}>
			<View style={styles.tempNav}><Text>InstaMatt</Text></View>
			<Image
				style={styles.imageSize}
			 	source={{uri: 'https://plantillasdememes.com/img/plantillas/wey-ya21580921268.jpg'}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + '%',
    height: 100 + '%',
	},
	tempNav: {
		width: 100 + '%',
		height: 55,
		marginTop: 25,
		backgroundColor: "rgb(250, 250, 250)",
		borderBottomColor: 'rgb(233,233,233)',
		borderBottomWidth: StyleSheet.hairlineWidth,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageSize: {
		width: 100 + '%', height: 100
	}
});


export default InstaMatt;
import React from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';


const InstaMatt = () => {
	return (
		<View style={styles.container}>
			<View style={styles.tempNav}><Text>InstaMatt</Text></View>
			<View style={styles.userBar}>
				<View style={{flexDirection: 'row',alignItems: 'center'}}>
					<Image
						style={styles.profilePicture}
						source={{uri: 'https://i.pinimg.com/280x280_RS/ed/ec/78/edec78ac2d3e5ea21020e946c54ae227.jpg'}}
						></Image>
					<Text>Mili Pili</Text>
				</View>
			</View>
			<Image
				style={styles.imageSize}
			 	source={{uri: 'https://www.collabary.com/wp-content/uploads/2017/06/Break-The-Instagram-%E2%80%93-How-To-Capture-And-Create-The-Perfect-Influencer-Photo.jpg'}}
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
	userBar: {
		width: 100 + '%',
		height: 50,
		backgroundColor: 'rgb(255, 255, 255)',
		flexDirection: 'row',
		alignItems: 'center'
	},
	tempNav: {
		width: 100 + '%',
		// alignSelf: 'stretch', in order to avoid the width with the % symbol
		height: 55,
		marginTop: 25,
		backgroundColor: 'rgb(250, 250, 250)',
		borderBottomColor: 'rgb(233,233,233)',
		borderBottomWidth: StyleSheet.hairlineWidth,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageSize: {
		width: 100 + '%', height: 100
	},
	profilePicture: {
		width: 40, height: 40
	}
});


export default InstaMatt;
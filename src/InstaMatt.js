import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import config from './config';


const InstaMatt = () => {
	const [screenWidth, setScreenWidth] = useState(null);
	const [liked, setLiked] = useState(false)
	useEffect(() => {
		setScreenWidth(Dimensions.get('window').width * 1.1);
	}, []);

	likeToggle = () => {
		setLiked(!liked);
	}

	const heartIconColor = liked ? 'rgb(252,61,57)' : null;
	return (
		<View style={styles.container}>
			<View style={styles.tempNav}><Text>InstaMatt</Text></View>
			<View style={styles.userBar}>
				<View style={{flexDirection: 'row',alignItems: 'center'}}>
					<Image
						style={styles.profilePicture}
						source={{uri: 'https://i.pinimg.com/280x280_RS/ed/ec/78/edec78ac2d3e5ea21020e946c54ae227.jpg'}}
						></Image>
					<Text style={{marginLeft: 10}} >MiliPiliTestUser</Text>
					
				</View>
				<View style={{ marginBottom: 10,flexDirection: 'column',alignItems:'center'}}><Text style={{fontSize: 30}}>...</Text></View>
			</View>
			<TouchableOpacity 
			activeOpacity={0.7}
			onPress={()=> likeToggle()}>
			<Image
				style={{width: screenWidth, height:400, resizeMode: 'cover'}}
			 	source={{uri: 'https://www.collabary.com/wp-content/uploads/2017/06/Break-The-Instagram-%E2%80%93-How-To-Capture-And-Create-The-Perfect-Influencer-Photo.jpg'}}
			/>
			</TouchableOpacity>
			<View style={styles.iconBar}>
				<Image style={[styles.icon, { tintColor: heartIconColor}]} source={config.images.heartIcon} />
				<Image style={styles.icon} source={config.images.messageIcon} />
				<Image style={styles.icon} source={config.images.arrowIcon} />
			</View>
			<View style={styles.iconBar}>
			<Image style={{height:20, width: 20, tintColor: heartIconColor}} source={config.images.blackHeartIcon} />
				<Text>128 Likes</Text>
			</View>
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
		// alignSelf: 'stretch', in order to avoid the width with the % symbol
		height: 55,
		marginTop: 25,
		backgroundColor: 'rgb(250, 250, 250)',
		borderBottomColor: 'rgb(233,233,233)',
		borderBottomWidth: StyleSheet.hairlineWidth,
		justifyContent: 'center',
		alignItems: 'center'
	},

	userBar: {
		width: 100 + '%',
		height: config.styleConstants.rowHeight,
		backgroundColor: 'rgb(255, 255, 255)',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		justifyContent: 'space-between'
	},
	iconBar: {
		height: config.styleConstants.rowHeight,
		alignSelf: 'stretch',
		borderColor: 'rgb(233,233,233)',
		borderTopWidth: StyleSheet.hairlineWidth,
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		marginLeft: 5,
		height: 35,
		width: 35,
	},
	profilePicture: {
		width: 40,
		height: 40,
		borderRadius: 20
	}
});


export default InstaMatt;
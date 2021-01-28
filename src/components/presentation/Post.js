import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../config';

const Post = props => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    setLikes(props.likes);
    setScreenWidth(Dimensions.get('window').width * 1.1);
  }, []);

  const likeOnPicture = () => {
    if (clickCount == 1) {
      if (liked) {
        setLikes(likes - 1)
      } else {
        setLikes(likes + 1)
      }
      setLiked(!liked);
    } else {
      setClickCount(1);
      setTimeout(() => {
        setClickCount(0)
      }, 1000)
    }
  }

  const likeOnHeartButton = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked);
  }

  return (
    <View>
      <View style={styles.userBar}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={styles.profilePicture}
            source={{
              uri:
                props.profilePictureURL,
            }}
          />
          <Text style={{ marginLeft: 10 }}>{props.userName}</Text>
        </View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 30 }}>...</Text>
        </View>
      </View>
      <TouchableOpacity onMagicTap={() => alert('hiciste el supuesto magic tap')} onLongPress={() => alert('the button was pressed for a long time')}
        activeOpacity={0.7} onPress={() => likeOnPicture()}>
        <Image
          style={{ width: screenWidth, height: 400, resizeMode: 'cover' }}
          source={{
            uri:
              props.pictureURL,
          }}
        />
      </TouchableOpacity>
      <View style={styles.iconBar}>
        <TouchableOpacity onLongPress={() => alert('the button was pressed for a long time')}
          activeOpacity={0.7} onPress={() => likeOnHeartButton()}>
          {
            liked ?
              <Image style={styles.icon} source={config.images.redHeartIcon} /> :
              <Image style={styles.icon} source={config.images.heartIcon} />}
        </TouchableOpacity>
        <Image style={styles.icon} source={config.images.messageIcon} />
        <Image style={styles.icon} source={config.images.arrowIcon} />
      </View>
      <View style={styles.iconBar}>
        <Image
          style={{ marginLeft: 12, height: 20, width: 20 }}
          source={config.images.blackHeartIcon}
        />
        <Text style={{ marginLeft: 3 }}>{likes} Likes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    // alignSelf: 'stretch', in order to avoid the width with the % symbol
    height: 55,
    marginTop: 25,
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userBar: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
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
    marginLeft: 15,
    height: 35,
    width: 35,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Post;

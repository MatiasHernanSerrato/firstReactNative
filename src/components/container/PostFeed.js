import React from 'react';
import Post from '../presentation';
import { FlatList } from 'react-native';
import {fakeUser} from '../../mockData';

const PostFeed = () => {
  const _renderPost = ({item}) => {
    return <Post 
      userName={item.userName}
      profilePictureURL={item.profilePictureURL}
      pictureURL={item.pictureURL}
      likes={item.likes}
      />;
  };
  return (
    <FlatList
      data={fakeUser}
      keyExtractor={(item) => item.id.toString()}
      renderItem={_renderPost}
    />
  );
};

export default PostFeed;

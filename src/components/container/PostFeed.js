import React from 'react';
import Post from '../presentation';
import {FlatList} from 'react-native';

const PostFeed = () => {
  _renderPost = (item) => {
    return <Post item={item} />;
  };
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      keyExtractor={(item) => item.toString()}
      renderItem={_renderPost}
    />
  );
};

export default PostFeed;

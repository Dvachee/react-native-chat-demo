import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

export default function FriendListScreen({navigation}: any) {
  const usersOnline = useSelector((state: any) => state.usersOnline);
  const {itemContainerStyle, avatarImgStyle, avatarNameViewStyle} = styles;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={usersOnline}
        renderItem={({item}: any) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Chat', {
                  name: item.username,
                  userId: item.userId,
                })
              }>
              <View style={itemContainerStyle}>
                <Image style={avatarImgStyle} source={{uri: item.avatar}} />
                <View style={avatarNameViewStyle}>
                  <Text style={{fontSize: 20}}>{item.username}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item: any) => item.userId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainerStyle: {flex: 1, flexDirection: 'row'},
  avatarImgStyle: {width: 100, height: 100, borderRadius: 50},
  avatarNameViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

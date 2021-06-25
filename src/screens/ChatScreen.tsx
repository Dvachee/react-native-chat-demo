import React from 'react';
import {View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';

ChatScreen.navigationOptions = (screenProps: any) => ({
  title: screenProps.navigation.getParam('name'),
});

export default function ChatScreen({navigation}: any) {
  const dispatch = useDispatch();
  const selfUser = useSelector((state: any) => state.selfUser);
  const conversations = useSelector((state: any) => state.conversations);
  const userId = navigation.getParam('userId');
  const messages = conversations[userId].messages;

  return (
    <View style={{flex: 1, height: '100%'}}>
      <GiftedChat
        renderUsernameOnMessage
        messages={messages}
        onSend={messages => {
          dispatch({
            type: 'private_message',
            data: {message: messages[0], conversationId: userId},
          });
          dispatch({
            type: 'server/private_message',
            data: {message: messages[0], conversationId: userId},
          });
        }}
        user={{
          _id: selfUser.userId,
        }}
      />
    </View>
  );
}

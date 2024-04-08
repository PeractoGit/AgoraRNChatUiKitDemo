import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ChatFragment,
  GlobalContainer as UikitContainer,
  UikitModalPlaceholder,
} from 'react-native-chat-uikit';

const App = () => {
  const appKey = '611038473#1213244';
  const chatId = '65aaaa136e60d322819db6ba'; // The Chat ID. It can be a person or a group.
  const chatType = 0; // 0 means single person chat. 1 means group chat.

  return (
    <UikitContainer
      option={{appKey: appKey}}
      ModalComponent={() => <UikitModalPlaceholder />}>
      <ChatFragment screenParams={{chatId, chatType}} />
    </UikitContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
export default App;

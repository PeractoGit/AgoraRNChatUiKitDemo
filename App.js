import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container as UikitContainer,
  UikitModalPlaceholder,
} from 'react-native-chat-uikit';
import {ChatClient} from 'react-native-chat-sdk';


const App = () => {
  const appKey = '611038473#1213244';
  const chatId = '65aaaa136e60d322819db6ba'; // The Chat ID. It can be a person or a group.
  const chatType = 0; // 0 means single person chat. 1 means group chat.

  useEffect(() => {
    setTimeout(() => {
      ChatClient.getInstance().chatManager.addMessageListener({});
    }, 3000);
  }, []);

  return (
    <View>
      <Text>Welcome to AgoraChatUiKit2.x</Text>
      <UikitContainer
        options={{
          appKey,
          autoLogin: true,
          debugModel: true,
          pushConfig: {},
          requireAck: false,
          requireDeliveryAck: false,
        }}
        ModalComponent={() => <UikitModalPlaceholder />}>
        {/* <ChatFragment screenParams={{chatId, chatType}} /> */}
        <Text>Hello</Text>
      </UikitContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
export default App;

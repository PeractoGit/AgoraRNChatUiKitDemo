import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container as UikitContainer,
  UikitModalPlaceholder,
} from 'react-native-chat-uikit';
import {ChatClient} from 'react-native-chat-sdk';
import {onGroupsHandler, onUsersHandler} from './src/hooks/useApp';
import ChatScreen from './src/screens/ChatScreen';

const App = () => {
  const appKey = '611038473#1213244';

  return (
    <View>
      <Text>Welcome to AgoraChatUiKit2.x</Text>
      <UikitContainer
        onInitialized={() => {
          console.log('Initialized');
        }}
        options={{
          appKey,
          autoLogin: true,
          debugModel: true,
          requireAck: false,
          requireDeliveryAck: false,
        }}
        ModalComponent={() => <UikitModalPlaceholder />}>
        <ChatScreen />
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

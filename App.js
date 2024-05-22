// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ConversationList,
  Container as UikitContainer,
  UikitModalPlaceholder,
  useChatContext,
} from 'react-native-chat-uikit';
import ChatScreen from './src/screens/ChatScreen';
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const appKey = '611038473#1213244';
  return (
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UikitContainer>
  );
}

export default App;

import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ConversationList,
  Container as UikitContainer,
  UikitModalPlaceholder,
  useChatContext,
} from 'react-native-chat-uikit';
import {ChatClient} from 'react-native-chat-sdk';
import {onGroupsHandler, onUsersHandler} from './src/hooks/useApp';
import ChatScreen from './src/screens/ChatScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
// import {useNavigation} from '@react-navigation/native';

const App = () => {
  const appKey = '611038473#1213244';

  // const Root = createNativeStackNavigator();

  const Stack = createNativeStackNavigator();

  return (
    <View style={{borderColor: 'black', borderWidth: 4}}>
      {/* <Text>Welcome to AgoraChatUiKit2.x</Text> */}
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
          <Root.Navigator initialRouteName={'Home'}>
            <Root.Screen
              name={'Chat'}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
              component={ChatScreen}
            />
            <Root.Screen
              name={'Home'}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
              component={Home}
            />
          </Root.Navigator>
        </NavigationContainer>
      </UikitContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
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

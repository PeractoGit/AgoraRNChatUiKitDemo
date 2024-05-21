import React from 'react';
import { Text, View } from 'react-native';

import {
   ConversationList,
   ScreenContainer,
   useChatContext,
} from 'react-native-chat-uikit';
import { useNavigation } from '@react-navigation/native';
import { ChatClient } from 'react-native-chat-sdk';
import ScreenNames from '../hooks/screenName';

const ChatScreen = () => {
   console.log("Reached Chat screen")
   const { } = ChatHooks();
   const navigation = useNavigation();
   const { login: loginAction, logout: logoutAction } = useChatContext();
   const [isLogedIn, setIsLogedIn] = React.useState(false);

   React.useEffect(() => {
      loginAction({
         id: '65aaaa136e60d322819db6ba',
         pass: '007eJxTYNir7/KPx+Sv1UWB2UwrdFbPdjzyzmjT5aqY3Ks+a868nv5KgcHczMzUzMTQ2CjZLNHEKNXUIjUpLckk0cLEICXRzDDFhKnBJ41heRnD6ZYbTIwMrAyMQAjiqzAYJhsnGZknG+gmmaUm6xoapqbqWpoZp+papCQlWxobmhmYJqcCAAn0KY4=',
         onResult: result => {
            console.log("Recahed", result)
            ChatClient.getInstance().chatManager.setConversationExtension(
               agoraData.receiverUserId,
               0,
               {
                  userName:
                     "test name",
               },
            );
            setIsLogedIn(true);
            x
         },
      });
   }, []);
   return (
      <View>
         <Text>Welcome to Chat screen </Text>
         {isLogedIn && (
            <ScreenContainer
               mode="padding"
               edges={['right', 'left', 'bottom']}>
               <ConversationList
                  onPress={data => {
                     console.log(data);
                     navigation.navigate(ScreenNames.CHAT_DETAILS_SCREEN, {
                        chatId: data.convId,
                        chatType: 0,
                     });
                     // todo: enter to chat detail screen.
                  }}
               />
               {/* <ChatFragment
        screenParams={{
          params: route.params as any,
        }}
      /> */}
            </ScreenContainer>
         )}
      </View>
   );
};
export default ChatScreen;

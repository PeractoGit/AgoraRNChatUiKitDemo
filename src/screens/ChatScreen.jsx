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
   const navigation = useNavigation();
   const { login: loginAction, logout: logoutAction } = useChatContext();
   const [isLogedIn, setIsLogedIn] = React.useState(false);

   React.useEffect(() => {
      loginAction({
         userId: '65aaaa136e60d322819db6ba',
         userToken: '007eJxTYCg6p3/Fkm/5gkchjN1Hwi3X9FtdnLU/5PAe4383HjxlfpSswGBuZmZqZmJobJRslmhilGpqkZqUlmSSaGFikJJoZphiYnjKN41heRlDoJsoIyMDKwMjEIL4KgyGycZJRubJBrpJZqnJuoaGqam6lmbGqboWKUnJlsaGZgamyakA/PcozA==',
         result: ({ isOk, error }) => {
            console.log("Result2", isOk, error)
         }
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
                     console.log("Dta3", data);
                     navigation.navigate(ScreenNames.CHAT_DETAILS_SCREEN, {
                        chatId: data.convId,
                        chatType: 0,
                     });
                     // todo: enter to chat detail screen.
                  }}
               />
            </ScreenContainer>
         )}
      </View>
   );
};
export default ChatScreen;

import React from 'react';
import { Text, View } from 'react-native';

import {
   ChatFragment,
   ScreenContainer,
} from 'react-native-chat-uikit';
import { useRoute } from '@react-navigation/native';
const ChatDetailsScreen = () => {
   const { } = ChatDetailsHooks();
   const route = useRoute();


   return (
      <View >
         <ScreenContainer
            mode="padding"
            edges={['right', 'left', 'bottom']}>
            <ChatFragment
               screenParams={{
                  params: route.params,
               }}
            />
         </ScreenContainer>
      </View>
   );
};
export default ChatDetailsScreen;

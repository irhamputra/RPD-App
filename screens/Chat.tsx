import React from "react";
import { WebView } from "react-native-webview";
import { Overlay, Text } from "react-native-elements";
import { ActivityIndicator, View } from "react-native";

const Chat = () => {
  const [loading, setLoading] = React.useState(true);

  console.log(loading);
  return (
    <>
      <Overlay overlayStyle={{ height: 200, width: 200}} isVisible={loading}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator/>
          <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Loading to Chatbox...</Text>
        </View>
      </Overlay>
      <WebView
        cacheEnabled
        onNavigationStateChange={state => {
          if (!state.loading) {
            setLoading(state.loading);
          }
        }}
        source={{ uri: "http://radioppiduniachat.chatango.com/" }}
      />
    </>
  );
};

export default Chat;

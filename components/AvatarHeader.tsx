import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";

const AvatarHeader = () => {
  return (
    <View style={{ marginRight: 20 }}>
      <TouchableOpacity onPress={() => console.log('Profile page clicked')}>
        <Avatar rounded title="IP" />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarHeader;

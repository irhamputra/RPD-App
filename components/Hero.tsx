import React from "react";
import { Text } from "react-native-elements";
import styled from "styled-components";

import { StyledView } from "./Survey";
import { View } from "react-native";

const HeroBox: React.FC = () => {
  return (
    <View>
      <StyledView>
        <Text h4 style={{ fontWeight: "bold" }}>
          Live!
        </Text>
      </StyledView>
      <StyledLiveStreaming>
        <StyledLogo
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/739559545022885888/rcW635Or_400x400.jpg"
          }}
        />
        <View style={{ width: 200 }}>
          <Text>Now Airing:</Text>
          <Text>SSK Raka & SK Abul - Malaysia | Unit Galau Darurat</Text>
        </View>
      </StyledLiveStreaming>
    </View>
  );
};

const StyledLiveStreaming = styled.View`
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  flex-direction: row;
`;

const StyledLogo = styled.Image`
  height: 150px;
  width: 150px;
  border-width: 1px;
  border-radius: 2px;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2;
`;

export default HeroBox;

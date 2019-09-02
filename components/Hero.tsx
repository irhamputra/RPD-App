import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

import { StyledView } from "./Survey";

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
          <View>
            <Text style={{ fontWeight: "bold" }}>Now Airing:</Text>
            <Text>SSK Raka & SK Abul - Malaysia | Unit Galau Darurat</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "black",
                  borderRadius: 2,
                  width: "100%",
                  marginTop: 10
                }}
                onPress={() => console.log("Play clicked")}
              >
                <MaterialIcons name="play-arrow" size={25} color="white" />
                <Text style={{ color: "white", marginRight: 8 }}>Play</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 2,
                  width: "100%",
                  marginTop: 10
                }}
                onPress={() => console.log("Stop clicked")}
              >
                <MaterialIcons name="stop" size={25} color="red" />
                <Text style={{ color: "red" }}>Stop</Text>
              </TouchableOpacity>
            </View>
          </View>
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

import React from "react";
import { Text } from "react-native-elements";
import { ScrollView } from "react-native";
import { StyledView } from "../components/Survey";

const Podcast: React.FC = () => {
  return (
    <ScrollView>
      <StyledView>
        <Text h4 h4Style={{ fontWeight: "bold" }}>
          Podcast
        </Text>
      </StyledView>
    </ScrollView>
  );
};

export default Podcast;

import React from "react";
import styled from "styled-components";
import { Text, Divider } from "react-native-elements";
import { ScrollView } from "react-navigation";
import { View } from "react-native";

import HeroBox from "../components/Hero";
import SurveyBox from "../components/Survey";
import NewsCard from "../components/NewsCard";

const Home: React.FC = () => {
  return (
    <StyledScrollView>
      <ScrollView>
        <StyledView>
          <Text h3 h3Style={{ fontWeight: "bold" }}>
            Hello!
          </Text>
          <View>
            <Text>Now Airing</Text>
            <Text>SSK Raka & SK Abul</Text>
          </View>
        </StyledView>
        <HeroBox />
        <Divider style={{height: 10, backgroundColor: '#EFEFEF'}} />
        <SurveyBox />
        <Divider/>
        <NewsCard/>
      </ScrollView>
    </StyledScrollView>
  );
};
const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const StyledScrollView = styled.SafeAreaView`
  flex: 1;
  padding-bottom: 20px;
`;

export default Home;

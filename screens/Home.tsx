import React from "react";
import styled from "styled-components";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-navigation";

import HeroBox from "../components/Hero";
import SurveyBox from "../components/Survey";
import NewsCard from "../components/NewsCard";

const Home: React.FC = () => {
  return (
    <StyledScrollView>
      <ScrollView>
        <HeroBox />
        <Divider style={{height: 10, backgroundColor: '#EFEFEF'}} />
        <SurveyBox />
        <Divider/>
        <NewsCard/>
      </ScrollView>
    </StyledScrollView>
  );
};

const StyledScrollView = styled.SafeAreaView`
  flex: 1;
  padding-bottom: 20px;
`;

export default Home;

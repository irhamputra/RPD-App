import React from "react";
import styled from "styled-components";
import { Text } from "react-native-elements";
import { ScrollView } from "react-navigation";
import { View } from "react-native";

// receive GQL from server
const SurveyBox: React.FC = () => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={{margin: 20, marginBottom: 0}} h4 h4Style={{fontWeight: "bold"}}>Quizzes</Text>
      <ScrollView style={{ marginHorizontal: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
        <StyledBox>
          <StyledTextBox>Quiz #1</StyledTextBox>
        </StyledBox>
        <StyledBox>
          <StyledTextBox>Quiz #2</StyledTextBox>
        </StyledBox>
        <StyledBox>
          <StyledTextBox>Quiz #3</StyledTextBox>
        </StyledBox>
        <StyledBox>
          <StyledTextBox>Quiz #4</StyledTextBox>
        </StyledBox>
      </ScrollView>
    </View>
  );
};

const StyledBox = styled.View`
  width: 150px;
  height: 150px;
  margin: 10px;
  background-color: darkred;
  justify-content: center;
  align-items: center;
`;

const StyledTextBox = styled.Text`
  font-weight: bold;
  color: white;
  margin: 10px;
`;

export default SurveyBox;

import React from "react";
import styled from "styled-components";
import { Text } from "react-native-elements";
import { ScrollView } from "react-navigation";
import { View } from "react-native";

// receive GQL from server
const SurveyBox: React.FC = () => {
  return (
    <View style={{ marginBottom: 10 }}>
      <StyledView>
        <Text style={{fontWeight: 'bold', paddingBottom: 5, fontSize: 20}}>
          RPD Kuis
        </Text>
        <Text style={{ paddingVertical: 5 }}>
          Tebak kuisnya dan menangkan hadiah dari berbagai SS & SK Radio PPI
          Dunia
        </Text>
      </StyledView>

      <ScrollView
        style={{marginHorizontal: 15}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
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

export const StyledView = styled.View`
  padding: 20px 20px 0;
`;

export const StyledBox = styled.View`
  width: 150px;
  height: 150px;
  margin: 10px 5px;
  background-color: darkred;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const StyledTextBox = styled.Text`
  font-weight: bold;
  color: white;
  margin: 10px;
`;

export default SurveyBox;

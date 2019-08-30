// @ts-ignore
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";

const HeroBox: React.FC = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{ margin: 10, marginTop: 0 }}
      horizontal={true}
    >
      <StyledBox>
        <AntDesign name="caretright" size={50} color="white" />
        <StyledTextBox>Live</StyledTextBox>
      </StyledBox>
      <StyledBox>
        <AntDesign name="caretright" size={50} color="white" />
        <StyledTextBox>Chatbox</StyledTextBox>
      </StyledBox>
      <StyledBox>
        <AntDesign name="caretright" size={50} color="white" />
        <StyledTextBox>Programs</StyledTextBox>
      </StyledBox>
      <StyledBox>
        <AntDesign name="caretright" size={50} color="white" />
        <StyledTextBox>Podcast</StyledTextBox>
      </StyledBox>
    </ScrollView>
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

export default HeroBox;

import React from "react";
import { View } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import { StyledView } from "./Survey";

const NewsCard: React.FC = () => {
  return (
    <View>
      <StyledView>
        <Text style={{ fontWeight: "bold", paddingBottom: 5, fontSize: 20 }}>
          RPD News
        </Text>
      </StyledView>
      <Card
        containerStyle={{ margin: 20, marginTop: 10, marginBottom: 10}}
        image={{
          uri:
            "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Vlog Radio PPI Dunia
        </Text>
        <Text>
          SK Abul mendapatkan undangan ke acara Simposium Radio PPI Dunia, yuk
          ikuti ceritanya di Vlog Radio PPI Dunia
        </Text>
        <Button
          onPress={() => console.log("clicked")}
          style={{ marginTop: 10 }}
          title="Read now"
        />
      </Card>
      <Card
        containerStyle={{ margin: 20, marginTop: 10, marginBottom: 10}}
        image={{
          uri:
            "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Vlog Radio PPI Dunia
        </Text>
        <Text>
          SK Abul mendapatkan undangan ke acara Simposium Radio PPI Dunia, yuk
          ikuti ceritanya di Vlog Radio PPI Dunia
        </Text>
        <Button
          onPress={() => console.log("clicked")}
          style={{ marginTop: 10 }}
          title="Read now"
        />
      </Card>
    </View>
  );
};

export default NewsCard;

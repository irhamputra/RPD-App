import React from "react";
import { View } from "react-native";
import { Text, Card } from "react-native-elements";

const NewsCard: React.FC = () => {
  return (
    <View style={{ margin: 5 }}>
      <Text
        h4
        h4Style={{ marginTop: 10, marginHorizontal: 15, fontWeight: "bold" }}
      >
        News
      </Text>
      <Card
        image={{
          uri:
            "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }}
      >
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Vlog Radio PPI Dunia</Text>
        <Text>
          SK Abul mendapatkan undangan ke acara Simposium Radio PPI Dunia, yuk
          ikuti ceritanya di Vlog Radio PPI Dunia
        </Text>
      </Card>

      <Card
        image={{
          uri:
            "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }}
      >
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Vlog Radio PPI Dunia</Text>
        <Text>
          SK Abul mendapatkan undangan ke acara Simposium Radio PPI Dunia, yuk
          ikuti ceritanya di Vlog Radio PPI Dunia
        </Text>
      </Card>
    </View>
  );
};

export default NewsCard;

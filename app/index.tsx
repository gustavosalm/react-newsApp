import { Text, View } from "react-native";
import axios from 'axios';

export default function Index() {
  const teste = async () => {
    try {
      let url = 'https://newsapi.org/v2/everything?q=apple&from=2024-08-06&to=2024-08-06&pageSize=20&apiKey=a2dc901b02e841358c7b7f6c7c38d57c'

      // let url = 'https://newsapi.org/v2/everything?' +
      //           'from=2024-08-07&' +
      //           'sortBy=publishedAt&' +
      //           'apiKey=a2dc901b02e841358c7b7f6c7c38d57c';

      const response = await axios.get(url);
      console.log(response);
    } catch(error) {
      console.log(error)
    }
  }


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <button onClick={teste}>pegar dados</button>
    </View>
  );
}

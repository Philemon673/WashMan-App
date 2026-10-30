import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const TransactionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>TransactionDetails: {id}</Text>
      <Link href="/">Go Home</Link>
    </View>
  );
};

export default TransactionDetails;

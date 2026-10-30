import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>sign up</Text>
      <Link href="/(auth)/sign-in" className="text-blue-500">
        Login
      </Link>
    </View>
  );
};

export default SignUp;

import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>sign in</Text>
      <Link href="/(auth)/sign-up" className="text-blue-500">
        Create Account
      </Link>
    </View>
  );
};

export default SignIn;

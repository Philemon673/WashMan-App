import { ImageSourcePropType } from "react-native";

interface Tab {
  name: string;
  title: string;
  icon: ImageSourcePropType;
}

export const tabs: Tab[] = [
  { name: "index", title: "Home", icon: require("@/assets/icons/home.png") },
  { name: "activity", title: "Activity", icon: require("@/assets/icons/activity.png") },
  { name: "wallet", title: "Wallet", icon: require("@/assets/icons/wallet.png") },
  { name: "setting", title: "Settings", icon: require("@/assets/icons/setting.png") },
];

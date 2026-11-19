import { tabs } from "@/constants/data";
import { components } from "@/constants/theme";
import { Tabs } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const BAR_BG = "#FFFFFF";
const ACTIVE = "#006C49";
const INACTIVE = "#6C7A71";
const PILL = "#CFF8E3";

interface TabIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
}

const TabIcon = ({ focused, icon }: TabIconProps) => (
  <View className="tabs-icon">
    <View
      className="tabs-pill"
      style={{ backgroundColor: focused ? PILL : "transparent" }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        className="tabs-glyph"
        style={{ tintColor: focused ? ACTIVE : INACTIVE }}
      />
    </View>
  </View>
);

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const sideInset = 20;
  const barWidth = width - sideInset * 2;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          width: barWidth,
          marginLeft: sideInset,
          height: tabBar.height,
          borderRadius: tabBar.radius,
          borderTopWidth: 0,
          backgroundColor: BAR_BG,
          shadowColor: "#0F172A",
          shadowOpacity: 0.1,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
          elevation: 8,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import clsx from "clsx";
import { Tabs } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

interface TabIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
}

const TabIcon = ({ focused, icon }: TabIconProps) => (
  <View className="tabs-icon">
    <View className={clsx("tabs-pill", focused && "tabs-active")}>
      <Image source={icon} resizeMode="contain" className="tabs-glyph" />
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
          elevation: 0,
          backgroundColor: colors.primary,
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

import { Tabs } from "expo-router";

const TabsLayout = () => (
  <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="track" options={{ title: "Track" }} />
    <Tabs.Screen name="message" options={{ title: "Message" }} />
    <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    <Tabs.Screen name="transactions/[id]" options={{ href: null }} />
  </Tabs>
);

export default TabsLayout;

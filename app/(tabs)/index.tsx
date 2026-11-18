import { LeafBadge } from "@/components/badges";
import BellButton from "@/components/iconsButtons";
import Location from "@/components/location";
import SearchBar from "@/components/search";
import { emojis } from "@/constants/emojis";
import images from "@/constants/images";
import "@/global.css";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 18) return "Good Afternoon";
  return "Good Evening";
};
const name = "FresshFold";

export default function App() {
  return (
    <SafeAreaView
      className="flex-1 bg-[#F8FAFF]/80 "
      style={{ boxShadow: "inset 0px -4px 6px rgba(143, 143, 143, 0.04)" }}
    >
      <View className="flex-row items-center justify-between bg-white px-4 py-3 shadow-md ">
        {/* Left: bell + notification dot */}
        <View className="relative">
          <BellButton />
          <View
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#006C49",
            }}
          />
        </View>

        {/* Right: title/subtitle + avatar */}
        <View className="flex-row items-center gap-3">
          <View>
            <Text className="text-xl font-sans-bold text-[#006C49]">
              FreshFold
            </Text>
          </View>
          <Image
            source={images.avatar}
            className="size-14 rounded-full border-2 border-green-200"
          />
        </View>
      </View>
      <View className="flex-row items-center px-4 pt-4">
        {/* Left: greeting + subtitle */}
        <View className="flex-1 pr-3">
          <Text className="text-xl font-sans-bold tracking-tight text-slate-900">
            {getGreeting()}, {name} {emojis.wave}
          </Text>
          <Text className="pt-1 text-lg font-sans-regular text-slate-600">
            {"Fresh clothes, fresh start. Let's schedule your pickup!"}
          </Text>
        </View>

        {/* Right: badge */}
        <LeafBadge />
      </View>
      <View className="px-4 pt-4">
        <View
          className="rounded-3xl bg-white p-3"
          style={{ boxShadow: "0px 6px 16px rgba(15, 23, 42, 0.08)" }}
        >
          <Location address="742 Evergreen Terrace, Apt 4B" />

          <View className="mt-2">
            <SearchBar
              onSearch={(q) => console.log("search:", q)}
              onFilterPress={() => console.log("open filters")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

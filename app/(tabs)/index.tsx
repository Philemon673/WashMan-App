import CarePackages from "@/components/company/company";
import HomeTrack from "@/components/hometrackingcard/hometrack";
import BellButton from "@/components/iconsButtons";
import Location from "@/components/location";
import PromoCard from "@/components/promo/promocard";
import SearchBar from "@/components/search";
import Services from "@/components/services/service";
import { LeafBadge } from "@/components/svgIcons";
import { emojis } from "@/constants/emojis";
import images from "@/constants/images";
import "@/global.css";
import { Image, ScrollView, Text, View } from "react-native";
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
      className="flex-1 bg-[#F8FAFF]/80"
      style={{ boxShadow: "inset 0px -4px 6px rgba(143, 143, 143, 0.04)" }}
    >
      {/* Header (fixed) */}
      <View className="flex-row items-center justify-between bg-white px-4 py-3 shadow-md">
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

        <View className="flex-row items-center gap-3">
          <Text className="text-xl font-sans-bold text-[#006C49]">
            FreshFold
          </Text>
          <Image
            source={images.avatar}
            className="size-14 rounded-full border-2 border-green-200"
          />
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
      >
        <View className="flex-row items-center px-4 pt-4">
          <View className="flex-1 pr-3">
            <Text className="text-xl font-sans-bold tracking-tight text-slate-900">
              {getGreeting()}, {name} {emojis.wave}
            </Text>
            <Text className="pt-1 text-lg font-sans-regular text-slate-600">
              {"Fresh clothes, fresh start. Let's schedule your pickup!"}
            </Text>
          </View>
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

        <View className="px-4 pt-4">
          <View
            className="rounded-3xl bg-white p-3"
            style={{ boxShadow: "0px 6px 16px rgba(15, 23, 42, 0.08)" }}
          >
            <HomeTrack />
          </View>
        </View>

        <View className="px-4 pt-4">
          <Services />
        </View>

        <View className="px-4 pt-4">
          <PromoCard />
        </View>
        <View className="px-4 pt-4">
          <CarePackages />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
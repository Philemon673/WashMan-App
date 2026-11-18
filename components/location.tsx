// components/PickupLocation.tsx
import { ChevronDown, PinLocation } from "@/components/svgIcons";
import { Pressable, Text, View } from "react-native";

type Props = {
  address?: string;
  onChange?: () => void;
};

export default function PickupLocation({
  address = "123 Main Street, Apt 4B",
  onChange,
}: Props) {
  return (
    <View className="flex-row items-center rounded-2xl bg-[#EFF4FF] px-4 py-3">
      {/* Left: pin */}
      <View className="mr-3">
        <PinLocation />
      </View>

      {/* Middle: label + address */}
      <View className="flex-1 pr-2">
        <Text className="text-xs font-sans-semibold uppercase tracking-widest text-slate-600">
          Pickup location
        </Text>
        <Text
          numberOfLines={1}
          className="text-lg font-sans-bold text-slate-900"
        >
          {address}
        </Text>
      </View>

      {/* Right: change button */}
      <Pressable
        onPress={onChange}
        hitSlop={8}
        className="flex-row items-center gap-1"
      >
        <Text className="text-base font-sans-bold text-[#006C49]">Change</Text>
        <ChevronDown />
      </Pressable>
    </View>
  );
}

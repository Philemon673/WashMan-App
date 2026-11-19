import { Pressable, ScrollView, Text, View } from "react-native";
import {
  ArrowRightIcon,
  BedIcon,
  DropIcon,
  HangerIcon,
  IronIcon,
} from "../svgIcons";

const services = [
  { id: "wash", name: "Wash & Fold", price: "$2.50/kg", Icon: DropIcon },
  { id: "dry", name: "Dry Clean", price: "$6.00/pc", Icon: HangerIcon },
  { id: "iron", name: "Iron & Press", price: "$1.50/pc", Icon: IronIcon },
  { id: "bed", name: "Bedding", price: "From $8", Icon: BedIcon },
];

const Services = () => {
  return (
    <View className="gap-4">
      {/* Header: title + Explore all */}
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-sans-bold text-[#181C20]">
          Services
        </Text>
        <Pressable className="flex-row items-center gap-1">
          <Text className="text-base font-sans-bold text-[#006C49]">
            Explore all
          </Text>
          <ArrowRightIcon size={16} />
        </Pressable>
      </View>

      {/* Service cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingRight: 20 }}
      >
        {services.map(({ id, name, price, Icon }) => (
          <View
            key={id}
            className="w-28 items-center gap-3 rounded-3xl bg-white px-3 py-5"
            style={{
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 2 },
              elevation: 2,
            }}
          >
            <Icon size={56} />
            <View className="items-center gap-1 ">
              <Text
                className="text-center text-base font-sans-bold text-[#181C20]"
                numberOfLines={2}
              >
                {name}
              </Text>
              <Text className="text-center text-sm font-sans-semibold text-[#006C49]">
                {price}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;
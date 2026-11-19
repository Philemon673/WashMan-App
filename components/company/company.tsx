import images from "@/constants/images";
import { Image, Pressable, Text, View } from "react-native";
import { AddButton, ArrowRightIcon, BulletDot, StarIcon } from "../svgIcons";

const packages = [
  {
    id: "wash",
    name: "Regular Wash & Fold",
    description: "T-shirts, trousers, gym wear, & socks",
    badge: "Fast 24h",
    rating: "4.9",
    reviews: "(2.4k)",
    price: "$2.50 / kg",
    image: images.washFold,
  },
  {
    id: "dry",
    name: "Eco Dry Clean",
    description: "Suits, silks, cashmere, & dresses",
    badge: "Delicate",
    rating: "4.95",
    reviews: "(1.8k)",
    price: "From $6.00",
    image: images.dryClean,
  },
  {
    id: "bedding",
    name: "Bedding & Linens",
    description: "Duvets, heavy comforters, and sheet sets",
    badge: "Thermal Sanitized",
    rating: "4.8",
    reviews: "(950)",
    price: "From $12.00",
    image: images.bedding,
  },
];

const CarePackages = () => {
  return (
    <View className="gap-4">
      {/* Header */}
      <View className="flex-row items-start justify-between">
        <View className="flex-1 pr-3">
          <Text className="text-xl font-sans-bold text-[#181C20]">
            Popular Service Providers
          </Text>
          <Text className="text-base font-sans-regular text-slate-600">
            Reliable, fast and affordable service
          </Text>
        </View>
        <Pressable
          onPress={() => console.log("view more")}
          className="flex-row items-center gap-1 pt-1 active:opacity-80"
        >
          <Text className="text-base font-sans-bold text-[#006C49]">View More</Text>
          <ArrowRightIcon size={18} />
        </Pressable>
      </View>

      {/* Package cards */}
      <View className="gap-4">
        {packages.map((item) => (
          <View
            key={item.id}
            className="flex-row items-center gap-3 rounded-3xl bg-white p-3"
            style={{ boxShadow: "0px 6px 16px rgba(15, 23, 42, 0.08)" }}
          >
            {/* Photo + badge */}
            <View className="h-28 w-24 overflow-hidden rounded-2xl">
              <Image
                source={item.image}
                resizeMode="cover"
                className="h-full w-full"
              />
              <View className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-2 py-1">
                <Text className="text-xs font-sans-semibold text-[#3D4943]">
                  {item.badge}
                </Text>
              </View>
            </View>

            {/* Details */}
            <View className="flex-1 gap-1">
              <Text className="text-xl font-sans-bold text-[#181C20]">
                {item.name}
              </Text>
              <Text className="text-base font-sans-regular text-slate-600">
                {item.description}
              </Text>
              <View className="flex-row items-center gap-1">
                <StarIcon size={16} />
                <Text className="text-sm font-sans-semibold text-[#181C20]">
                  {item.rating}
                </Text>
                <Text className="text-sm font-sans-regular text-slate-500">
                  {item.reviews}
                </Text>
                <View className="px-1">
                  <BulletDot />
                </View>
                <Text className="text-base font-sans-bold text-[#006C49]">
                  {item.price}
                </Text>
              </View>
            </View>

            {/* Add button */}
            <Pressable onPress={() => console.log("add", item.id)}>
              <AddButton />
            </Pressable>
          </View>
        ))}
      </View>
      {/* View More button */}
      <Pressable
        onPress={() => console.log("view more")}
        className="h-12 flex-row items-center justify-center gap-2 rounded-full bg-[#9FF4CC] px-6 mb-8 active:opacity-80"
      >
        <Text className="text-base font-sans-bold text-[#006C49]">View More</Text>
      </Pressable>
    </View>
  );
};

export default CarePackages;
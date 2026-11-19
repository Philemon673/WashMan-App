import { CheckBadgeIcon, CopyIcon } from "@/components/svgIcons";
import towel from "../../assets/images/towel.jpg";
import * as Clipboard from "expo-clipboard";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";

type PromoCardProps = {
    badge?: string;
    title?: string;
    description?: string;
    code?: string;
    onClaim?: () => void;
};

const PromoCard = ({
    badge = "NEW CUSTOMER SPECIAL",
    title = "25% OFF Your First Laundry Run",
    description = "Eco-friendly detergents, anti-allergen steam, and gentle fabric restoration.",
    code = "FRESH25",
    onClaim,
}: PromoCardProps) => {
    return (
        <LinearGradient
            colors={["#006C49", "#0F8A5F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 24, padding: 20, overflow: "hidden" }}
        >
            {/* Badge */}
            <View className="flex-row items-center gap-2 self-start rounded-full bg-white/15 px-3 py-1.5">
                <CheckBadgeIcon size={16} />
                <Text className="text-xs font-sans-bold tracking-wide text-[#9FF4CC]">
                    {badge}
                </Text>
            </View>

            {/* Text + image */}
            <View className="mt-4 flex-row items-center gap-4">
                <View className="flex-1 gap-2">
                    <Text className="text-2xl font-sans-extrabold text-white">
                        {title}
                    </Text>
                    <Text className="text-base font-sans-regular text-[#CFF8E3]">
                        {description}
                    </Text>
                </View>
                <Image
                    source={towel}
                    resizeMode="cover"
                    className="size-28 rounded-2xl"
                />
            </View>

            {/* Code + claim button */}
            <View className="mt-5 flex-row items-center gap-3">
                <Pressable
                    onPress={() => Clipboard.setStringAsync(code)}
                    className="h-14 flex-1 flex-row items-center justify-between rounded-2xl bg-white/15 px-4"
                >
                    <View>
                        <Text className="text-xs font-sans-semibold text-[#CFF8E3]">
                            CODE:
                        </Text>
                        <Text className="text-base font-sans-bold text-white">{code}</Text>
                    </View>
                    <CopyIcon size={20} />
                </Pressable>

                <Pressable
                    onPress={onClaim}
                    className="h-14 items-center justify-center rounded-full bg-[#9FF4CC] px-6"
                >
                    <Text className="text-center text-base font-sans-bold text-[#006C49]">
                        Claim Offer
                    </Text>
                </Pressable>
            </View>
        </LinearGradient>
    );
};

export default PromoCard;
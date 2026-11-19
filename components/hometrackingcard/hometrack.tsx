import { Text, View } from "react-native";
import { ArrowRightIcon, ClothIcon, MachineIcon } from "../svgIcons";

const HomeTrack = () => {
    // 0 to 100: how far the order has progressed
    const progress = 65;

    return (
        <View className="gap-3 rounded-3xl p-4">
            {/* Row: status pills + Track button */}
            <View className="flex-row items-center justify-between gap-2">
                <View className="flex-row flex-1 items-center gap-2">
                    {/* Collected pill */}
                    <View className="h-12 flex-row items-center gap-1 rounded-full bg-[#CFF8E3] px-3">
                        <ClothIcon size={20} />
                        <Text className="text-sm font-sans-semibold text-[#006C49]"
                            numberOfLines={1}>
                            Collected
                        </Text>
                    </View>

                    {/* Washing pill */}
                    <View className="h-12 flex-1 flex-row items-center  rounded-full bg-[#CFF8E3] px-2">
                        <MachineIcon size={34} />
                        <Text
                            className="flex-1 text-sm font-sans-semibold text-[#006C49]"
                            numberOfLines={1}
                        >
                            Washing in process
                        </Text>
                    </View>
                </View>

                {/* Track button */}
                <View className="h-12 flex-row items-center justify-center gap-1 rounded-full bg-[#DCE6F9] px-4">
                    <Text className="text-base font-sans-bold text-[#006C49]">
                        Track
                    </Text>
                    <ArrowRightIcon size={18} />
                </View>
            </View>

            {/* Progress bar */}
            <View className="h-3 w-full overflow-hidden rounded-full bg-[#DCE6F9]">
                <View
                    className="h-full rounded-full bg-[#10B981]"
                    style={{ width: `${progress}%` }}
                />
            </View>

            {/* Delivery estimate */}
            <Text className="text-base font-sans-semibold text-[#3D4943]">
                EST: Delivery Today,{" "}
                <Text className="font-sans-bold text-[#006C49]">5:30 PM</Text>
            </Text>
        </View>
    );
};

export default HomeTrack;
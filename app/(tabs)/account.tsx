import { BOOKINGS } from "../../constants/data";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
    BadgeCheck,
    Briefcase,
    ChevronDown,
    MapPin,
    PenLine,
    Plus,
    ShoppingBag,
    Star,
    TrendingUp,
    Wallet,
} from "lucide-react-native";
import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

/* ----------------------------- Types ----------------------------- */

export interface ProfileData {
    cover?: string;
    avatar?: string;
    name?: string;
    title?: string;
    experience?: string;
    location?: string;
    about?: string;
}

export interface Service {
    id: string | number;
    name: string;
    unit: string;
    price: number;
    isActive: boolean;
}

interface ProviderProfileCardProps {
    onEditClick?: () => void;
    onEarningsPress?: () => void;
    profileData?: ProfileData;
    /* Earnings section */
    earningsAmount?: string;
    earningsCurrency?: string;
    earningsChangePercent?: number;
    /* Services section */
    services?: Service[];
}

const CURRENCY_SYMBOL = "XAF";
const EMPTY_SERVICES: Service[] = [];

/* ------------------------ ProviderProfileCard ------------------------ */

export default function ProviderProfileCard({
    onEditClick,
    onEarningsPress,
    profileData,
    earningsAmount = "342.50",
    earningsCurrency = "XAF",
    earningsChangePercent = 12,
    services = EMPTY_SERVICES,
}: ProviderProfileCardProps) {
    const router = useRouter();
    const [aboutOpen, setAboutOpen] = useState(false);

    const earningsSign = earningsChangePercent >= 0 ? "+" : "";

    const activeCount = useMemo(
        () => services.filter((s) => s.isActive).length,
        [services]
    );

    const bookings = BOOKINGS ?? [];

    return (
        <>
            <View className="mb-2 overflow-hidden border border-gray-100 rounded-b-2xl">
                {/* Cover */}
                <View className="relative h-36">
                    <Image
                        source={{
                            uri:
                                profileData?.cover ||
                                "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=80",
                        }}
                        accessibilityLabel="Laundry Banner"
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                    <LinearGradient
                        colors={["transparent", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)"]}
                        locations={[0, 0.5, 1]}
                        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                    />
                    <View className="absolute top-3 left-3 flex-row items-center gap-1.5 bg-green-400 px-2.5 py-1 rounded-full">
                        <BadgeCheck size={13} color="#fff" />
                        <Text className="text-white text-[11px] font-bold">VERIFIED</Text>
                    </View>
                </View>

                <View className="bg-white px-4 pt-3 pb-4">
                    {/* Name / rating */}
                    <View className="flex-row items-center justify-between mb-3">
                        <View className="flex-row items-center gap-3">
                            <Image
                                source={{
                                    uri:
                                        profileData?.avatar ||
                                        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&q=80",
                                }}
                                accessibilityLabel={profileData?.name || "Washman John"}
                                className="w-16 h-16 rounded-xl border-2 border-white -mt-10"
                                style={{
                                    shadowColor: "#000",
                                    shadowOpacity: 0.2,
                                    shadowRadius: 4,
                                    shadowOffset: { width: 0, height: 2 },
                                    elevation: 3,
                                }}
                                resizeMode="cover"
                            />
                            <View>
                                <Text className="text-[15px] font-black text-gray-900">
                                    {profileData?.name || "Washman John"}
                                </Text>
                                <Text className="text-[12px] text-gray-400">
                                    {profileData?.title || "Owner & Master Cleaner"}
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-full">
                            <Star size={13} color="#3B82F6" fill="#3B82F6" />
                            <Text className="text-[13px] font-bold text-blue-600">4.8</Text>
                        </View>
                    </View>

                    {/* Meta */}
                    <View className="flex-row items-center gap-4 mb-3">
                        <View className="flex-row items-center gap-1.5">
                            <Briefcase size={14} color="#9CA3AF" />
                            <Text className="text-gray-500 text-[12px]">
                                {profileData?.experience || "8 Years Exp."}
                            </Text>
                        </View>
                        <View className="flex-row items-center gap-1.5">
                            <MapPin size={14} color="#9CA3AF" />
                            <Text className="text-gray-500 text-[12px]">
                                {profileData?.location || "Douala, Bonaberi"}
                            </Text>
                        </View>
                    </View>

                    {/* Actions */}
                    <View className="flex-row gap-2.5 pb-4 bg-white">
                        <Pressable
                            onPress={() =>
                                router.push("/singleprovider-dashboard/profile/verifications" as any)
                            }
                            className="flex-1 flex-row items-center justify-center gap-2 bg-blue-50 px-5 py-2.5 rounded-xl active:opacity-80"
                        >
                            <Plus size={14} color="#2563EB" />
                            <Text className="text-[13px] font-semibold text-blue-600">
                                Verify Your Account
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={onEditClick}
                            className="flex-row items-center justify-center gap-2 bg-[#345ee8] px-[18px] py-2.5 rounded-xl active:opacity-80"
                        >
                            <PenLine size={14} color="#fff" />
                            <Text className="text-[13px] font-semibold text-white">Edit</Text>
                        </Pressable>
                    </View>

                    {/* About (collapsible) */}
                    <View className="border-t border-gray-100 pt-3">
                        <Pressable
                            onPress={() => setAboutOpen((v) => !v)}
                            className="flex-row items-center justify-between w-full"
                        >
                            <Text className="text-[14px] font-black text-gray-900">About</Text>
                            <View style={{ transform: [{ rotate: aboutOpen ? "180deg" : "0deg" }] }}>
                                <ChevronDown size={18} color="#9CA3AF" />
                            </View>
                        </Pressable>

                        {aboutOpen && (
                            <ScrollView className="max-h-40 mt-2" nestedScrollEnabled>
                                <Text className="text-[13px] text-gray-500 leading-relaxed">
                                    {profileData?.about ||
                                        "No bio available yet. Click Edit to add information about your business."}
                                </Text>
                            </ScrollView>
                        )}
                    </View>
                </View>
            </View>

            {/* Earnings section */}
            <View className="px-1 mb-2">
                <Pressable
                    onPress={onEarningsPress}
                    accessibilityRole="button"
                    accessibilityLabel="View earnings details and withdraw"
                    className="active:opacity-90"
                >
                    <LinearGradient
                        colors={["#2563eb", "#3b82f6"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ borderRadius: 16, paddingHorizontal: 20, paddingVertical: 20 }}
                    >
                        <View className="flex-row items-start justify-between">
                            {/* Left: text content */}
                            <View className="flex-1">
                                <Text className="text-[13px] text-blue-200 font-medium mb-1">
                                    Click for details and withdraws
                                </Text>
                                <Text className="text-[13px] text-blue-200 font-medium mb-2">
                                    Today&apos;s Total earnings
                                </Text>

                                <View className="flex-row items-center gap-3">
                                    <Text className="text-[22px] font-black text-white">
                                        {earningsCurrency} {earningsAmount}
                                    </Text>

                                    <View className="flex-row items-center gap-1 bg-white/20 rounded-full px-2.5 py-1">
                                        <TrendingUp size={12} color="#4ade80" />
                                        <Text
                                            className="text-[12px] font-bold"
                                            style={{ color: "#4ade80" }}
                                        >
                                            {earningsSign}
                                            {earningsChangePercent}%
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* Right: wallet icon */}
                            <View className="w-10 h-10 bg-white/20 rounded-xl items-center justify-center">
                                <Wallet size={20} color="#ffffff" />
                            </View>
                        </View>
                    </LinearGradient>
                </Pressable>
            </View>

            {/* ── Stats Row ── */}
            <View className="px-1 pb-4 flex-row gap-3">
                <View className="flex-1 bg-white rounded-2xl px-4 py-4 shadow-sm border border-gray-100">
                    <Text className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Active Orders
                    </Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-[32px] font-black text-gray-900">08</Text>
                        <View className="w-10 h-10 bg-[#e0f2fe] rounded-xl items-center justify-center">
                            <ShoppingBag size={20} color="#3b82f6" />
                        </View>
                    </View>
                </View>

                <View className="flex-1 bg-white rounded-2xl px-4 py-4 shadow-sm border border-gray-100">
                    <Text className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Avg Rating
                    </Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-[32px] font-black text-gray-900">4.95</Text>
                        <View className="w-10 h-10 bg-[#fef3c7] rounded-xl items-center justify-center">
                            <Star size={20} color="#f59e0b" fill="#f59e0b" />
                        </View>
                    </View>
                </View>
            </View>

            {/* ── Quick Actions ── */}
            <View className="px-1 pb-4">
                <Text className="text-[17px] font-black text-gray-900 mb-3">
                    Quick Actions
                </Text>

                <View className="flex-row gap-3">
                    <Pressable
                        onPress={() =>
                            router.push("/singleprovider-dashboard/profile/services" as any)
                        }
                        className="flex-1 flex-row items-center justify-center gap-2 py-4 px-3 rounded-2xl border-2 border-dashed border-[#3b82f6]/40 bg-white active:opacity-80"
                    >
                        <Plus size={18} strokeWidth={2.5} color="#3b82f6" />
                        <Text className="text-[13px] font-bold text-[#3b82f6] text-center">
                            Services &amp; Pricing
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() =>
                            router.push("/singleprovider-dashboard/profile/post" as any)
                        }
                        className="flex-1 flex-row items-center justify-center gap-2 py-4 px-3 rounded-2xl border-2 border-dashed border-[#3b82f6]/40 bg-white active:opacity-80"
                    >
                        <Plus size={18} strokeWidth={2.5} color="#3b82f6" />
                        <Text className="text-[13px] font-bold text-[#3b82f6] text-center">
                            New Post
                        </Text>
                    </Pressable>
                </View>
            </View>

            {/* ── Services & Pricing Preview ── */}
            <View className="px-1 pb-4">
                <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    {/* Header */}
                    <View className="flex-row items-center justify-between mb-3">
                        <View className="flex-1 pr-3">
                            <Text className="text-[16px] font-black text-gray-900">
                                My Services &amp; Pricing
                            </Text>
                            <Text className="text-[12px] text-gray-400">
                                {activeCount} active services published to clients
                            </Text>
                        </View>

                        <Pressable
                            onPress={() =>
                                router.push("/singleprovider-dashboard/profile/services" as any)
                            }
                            className="bg-blue-50 px-3 py-1.5 rounded-xl active:opacity-80"
                        >
                            <Text className="text-[12px] font-bold text-blue-600">Manage All →</Text>
                        </Pressable>
                    </View>

                    {/* Services list */}
                    <View className="gap-2">
                        {services.slice(0, 3).map((srv) => (
                            <View
                                key={srv.id}
                                className="flex-row items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100"
                            >
                                <View className="flex-1 flex-row items-center gap-2 pr-2">
                                    <View className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <View className="flex-1">
                                        <Text
                                            className="text-[13px] font-bold text-gray-900 leading-tight"
                                            numberOfLines={1}
                                        >
                                            {srv.name}
                                        </Text>
                                        <Text className="text-[11px] text-gray-400">{srv.unit}</Text>
                                    </View>
                                </View>

                                <Text className="text-[13px] font-black text-blue-600">
                                    {CURRENCY_SYMBOL} {srv.price.toLocaleString()}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Add / edit button */}
                    <Pressable
                        onPress={() =>
                            router.push("/singleprovider-dashboard/profile/services" as any)
                        }
                        className="mt-3 w-full flex-row items-center justify-center gap-1.5 py-2.5 rounded-xl border border-dashed border-blue-300 active:opacity-80"
                    >
                        <Plus size={15} color="#2563eb" />
                        <Text className="text-[12px] font-bold text-blue-600">
                            Add or Edit Services
                        </Text>
                    </Pressable>
                </View>
            </View>

            {/* ── Recent Activities ── */}
            <View className="px-1 pb-5">
                <View className="flex-row items-center justify-between mb-3">
                    <Text className="text-[17px] font-black text-gray-900">
                        Recent Activities
                    </Text>
                    <Pressable
                        onPress={() => router.push("/singleprovider-dashboard/orders" as any)}
                        className="active:opacity-80"
                    >
                    <Text className="text-sm text-red-500">Debug: bookings count {bookings.length}</Text>
                        <Text className="text-[13px] font-bold text-[#3b82f6]">View All</Text>
                    </Pressable>
                </View>

                <View className="gap-3">
                    {bookings.map((booking: any) => (
                        <Pressable
                            key={booking.id}
                            onPress={() =>
                                router.push("/singleprovider-dashboard/orders" as any)
                            }
                            className="w-full flex-row items-center gap-3 bg-white rounded-2xl px-4 py-4 shadow-sm border border-gray-100 active:opacity-90"
                        >
                            <View
                                className="w-14 h-14 rounded-xl overflow-hidden shrink-0"
                                style={{ backgroundColor: booking.avatarBg }}
                            >
                                <Image
                                    source={
                                        typeof booking.avatar === "string"
                                            ? { uri: booking.avatar }
                                            : booking.avatar
                                    }
                                    accessibilityLabel={booking.name}
                                    className="w-full h-full"
                                    resizeMode="cover"
                                />
                            </View>

                            <View className="flex-1">
                                <Text className="text-[14px] font-bold text-gray-900 leading-tight">
                                    {booking.name}
                                </Text>
                                <Text className="text-[12px] text-gray-400 mt-0.5">
                                    {booking.service} • {booking.distance}
                                </Text>
                                <Text
                                    className="text-[12px] font-bold mt-1"
                                    style={{ color: booking.statusColor }}
                                >
                                    {booking.status}
                                </Text>
                            </View>

                            <View className="items-end shrink-0">
                                <Text className="text-[11px] text-gray-400 mt-1">
                                    {booking.time}
                                </Text>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>
        </>
    );
}
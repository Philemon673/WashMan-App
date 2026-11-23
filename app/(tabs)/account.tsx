import { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MENU_ITEMS }from "@/constants/data";
import {
  BadgeCheck,
  Star,
  Briefcase,
  MapPin,
  Plus,
  PenLine,
  ChevronDown,
   X, 
   MoreVertical, 
   HelpCircle, 
   ShieldCheck, 
   Globe, 
   LogOut
} from "lucide-react-native";

export default function ProviderProfileCard({ onEditClick, profileData }) {
  const router = useRouter();
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
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
          className="absolute inset-0"
          // Fallback in case className isn't applied to LinearGradient in your setup:
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
              accessibilityLabel="Washman John"
              className="w-16 h-16 rounded-xl border-2 border-white -mt-10 shadow shadow-black/20 elevation-3"
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
              router.push("/singleprovider-dashboard/profile/verifications")
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
            <View className={aboutOpen ? "rotate-180" : ""}>
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
  );
}



// import { useState, useRef } from "react";
// import { Modal, Pressable, Text, View } from "react-native";
// import { useRouter } from "expo-router";
// import {
//   X,
//   MoreVertical,
//   LogOut,
// } from "lucide-react-native";
// import { MENU_ITEMS } from "@/constants/data";


// export default function WelcomeHeader({
//   name = "Alex Washman",
//   avatarSrc,
//   notificationCount = 0,
// }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
//   const buttonRef = useRef(null);
//   const router = useRouter();

//   // Measure the trigger so the dropdown can sit right under it (inside a Modal).
//   const openMenu = () => {
//     buttonRef.current?.measureInWindow((x, y, width, height) => {
//       // Import Dimensions if you prefer; using a large right inset fallback is avoided here.
//       setMenuPos({ top: y + height + 8, x, width });
//       setMenuOpen(true);
//     });
//   };

//   const closeMenu = () => setMenuOpen(false);

//   const go = (route) => {
//     closeMenu();
//     router.push(route);
//   };

//   return (
//     <View className="flex-row items-center justify-between px-6 py-4 bg-white shadow-sm border border-gray-100">
//       {/* Left: avatar + greeting */}
//       <View className="flex-row items-center gap-3">
//         <View className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-blue-600 items-center justify-center">
//           <Text className="text-white text-sm font-bold">
//             {name.slice(0, 2).toUpperCase()}
//           </Text>
//         </View>
//         <View className="flex-col">
//           <Text className="text-[#3b82f6] text-sm font-normal leading-tight">
//             Welcome back,
//           </Text>
//           <Text className="text-gray-900 text-base font-bold leading-tight">
//             {name}
//           </Text>
//         </View>
//       </View>

//       {/* Right: menu trigger + badge */}
//       <View className="relative">
//         <Pressable
//           ref={buttonRef}
//           onPress={menuOpen ? closeMenu : openMenu}
//           className="w-10 h-10 rounded-xl bg-blue-100 active:bg-blue-200 items-center justify-center"
//         >
//           {menuOpen ? (
//             <X size={20} color="#2563EB" />
//           ) : (
//             <MoreVertical size={20} color="#2563EB" />
//           )}
//         </Pressable>

//         {notificationCount > 0 && (
//           <View
//             pointerEvents="none"
//             className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 items-center justify-center"
//           >
//             <Text className="text-white text-[10px] font-bold">
//               {notificationCount > 9 ? "9+" : notificationCount}
//             </Text>
//           </View>
//         )}
//       </View>

//       {/* Dropdown: Modal replaces the web "click outside" listener */}
//       <Modal
//         visible={menuOpen}
//         transparent
//         animationType="fade"
//         onRequestClose={closeMenu}
//       >
//         {/* Tapping anywhere outside the menu closes it */}
//         <Pressable className="flex-1" onPress={closeMenu}>
//           <View
//             style={{
//               position: "absolute",
//               top: menuPos.top,
//               // align the menu's right edge with the trigger's right edge
//               left: (menuPos.x ?? 0) + (menuPos.width ?? 0) - 224,
//             }}
//             className="w-56 bg-white rounded-2xl border border-gray-100 shadow-xl elevation-8 overflow-hidden"
//           >
//             {MENU_ITEMS.map(({ key, label, route, Icon, iconColor }) => (
//               <Pressable
//                 key={key}
//                 onPress={() => go(route)}
//                 className="flex-row items-center gap-3 w-full px-4 py-3 border-b border-gray-200 active:bg-gray-50"
//               >
//                 <View className="w-8 h-8 rounded-full bg-blue-100 items-center justify-center">
//                   <Icon size={16} color={iconColor} />
//                 </View>
//                 <Text className="text-[13px] font-semibold text-gray-700">
//                   {label}
//                 </Text>
//               </Pressable>
//             ))}

//             <Pressable
//               onPress={closeMenu}
//               className="flex-row items-center gap-3 w-full px-4 py-3 border-b border-gray-200 active:bg-red-50"
//             >
//               <View className="w-8 h-8 rounded-full bg-red-100 items-center justify-center">
//                 <LogOut size={16} color="#EF4444" />
//               </View>
//               <Text className="text-[13px] font-bold text-red-500">Log out</Text>
//             </Pressable>
//           </View>
//         </Pressable>
//       </Modal>
//     </View>
//   );
// }
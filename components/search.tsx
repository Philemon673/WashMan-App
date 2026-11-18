// components/SearchBar.tsx
import { Filter, SearchIcon } from "@/components/svgIcons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

type Props = {
  onSearch?: (query: string) => void;
  onFilterPress?: () => void;
};

export default function SearchBar({ onSearch, onFilterPress }: Props) {
  const [query, setQuery] = useState("");

  const handleChange = (text: string) => {
    setQuery(text);
    onSearch?.(text);
  };

  return (
    <View className="flex-row items-center gap-3 px-4 py-2">
      {/* Left: icon + input */}
      <View className="flex-1 flex-row items-center gap-3">
        <SearchIcon />
        <TextInput
          value={query}
          onChangeText={handleChange}
          placeholder="Search garments, dry clean, duvet..."
          placeholderTextColor="#6C7A71"
          numberOfLines={1}
          returnKeyType="search"
          className="flex-1 py-0 text-lg font-sans-medium text-slate-900"
        />
      </View>

      {/* Right: filter button */}
      <Pressable onPress={onFilterPress} hitSlop={8}>
        <Filter />
      </Pressable>
    </View>
  );
}

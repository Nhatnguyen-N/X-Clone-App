import { View, Text } from "react-native";
import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function PostList() {
  const { currentUser } = useCurrentUser();

  return (
    <View>
      <Text>PostList</Text>
    </View>
  );
}

import { HeaderLeftButton } from "@components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Community, Post } from "@screens";
import { CommunityStackParamList } from "@types";

const Stacks = createNativeStackNavigator<CommunityStackParamList>();

const CommunityStack = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="Community" component={Community} options={{ title: "구강 건강 정보" }} />
      <Stacks.Screen name="Post" component={Post} options={{ title: "", headerLeft: HeaderLeftButton }} />
    </Stacks.Navigator>
  );
};

export default CommunityStack;

import { ReservationCard, ReservationTitle } from "@components";
import { fadeIn, scrollUp, tw } from "@shared";
import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";

const Confirmed = () => {
  const [_, setShowAnimation] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(-30)).current;
  useEffect(() => {
    setShowAnimation(true);
    Animated.parallel([fadeIn(opacity), scrollUp(scrollY)]).start();
  }, []);
  return (
    <Animated.View style={[{ opacity, transform: [{ translateY: scrollY }] }]}>
      <ReservationTitle
        style={tw`mt-1 mb-4`}
        state={"CONFIRMED"}
        title="예약이 성공적으로 변경되었습니다"
      />
      <ReservationCard
        hostipal="고르다치과의원 강남점"
        doctor="김민수"
        state={"CONFIRMED"}
        date="2. 24. 금, 오후 13:30"
        id={90374044}
        address="서울 강남구 강남대로 422 씨티빌딩 9층"
      />
    </Animated.View>
  );
};

export default Confirmed;

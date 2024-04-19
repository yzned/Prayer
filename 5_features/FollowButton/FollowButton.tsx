import {View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {SubscribeButton} from '../../7_shared/UI/buttons/subscribeButton/SubscribeButton';
import {
  getSubscribedPrayersRequest,
  subscribeRequest,
  unsubscribeRequest,
} from '../../7_shared/api/axios/requests/Prayers';
type PrayerPrimaryTypes = {
  prayerId: number;
};
export const FollowButton: FC<PrayerPrimaryTypes> = ({prayerId}) => {
  const [isRegistred, setIsRegistred] = useState<boolean>();
  const subscriptionVerification = async () => {
    const data = getSubscribedPrayersRequest();
    const subscribedInfo = Array.isArray(data) ? data[0] : data;
    if (prayerId === subscribedInfo?.columnId) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const checkSubscription = async () => {
      const result = await subscriptionVerification();
      setIsRegistred(result);
    };
    checkSubscription();
  }, []);

  const subscribePrayer = async () => {
    try {
      await subscribeRequest(prayerId);
      await setIsRegistred(true);
    } catch (error) {
      await unsubscribeRequest(prayerId);
      await setIsRegistred(false);
    }
  };
  return (
    <View>
      <SubscribeButton onPress={subscribePrayer} isRegistred={isRegistred} />
    </View>
  );
};

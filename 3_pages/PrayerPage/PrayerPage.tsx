import {View} from 'react-native';
import React, {FC} from 'react';
import {Commentaries} from '../../4_widgets/Commentaries/Commentaries';
import {CreateComment} from '../../5_features/CreateComment/CreateComment';
import {MyPrayersScreenProps} from '../../7_shared/navigation/screenProps';
import {useGetComments} from '../../4_widgets/Commentaries/model';

export const PrayerPage: FC<MyPrayersScreenProps> = ({route}) => {
  const {prayerName, prayerId, fetchPrayers} = route.params;
  const commentaries = useGetComments(prayerId);
  return (
    <View style={{flex: 1}}>
      <Commentaries
        prayerId={prayerId}
        prayerName={prayerName}
        comments={commentaries.comments}
        fetchPrayers={fetchPrayers}
      />
      <CreateComment
        prayerId={prayerId}
        fetchComments={commentaries.fetchData}
      />
    </View>
  );
};

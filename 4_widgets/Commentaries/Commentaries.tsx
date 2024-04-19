import {FlatList, Text, View} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './style';
import {Comment} from '../../5_features/Comment/Comment';
import {ScreenHeader} from '../../5_features/ScreenHeader/ScreenHeader';
import {PrayerInformation} from '../PrayerInformation/PrayerInformation';
import {PrayedAndFollowButtons} from '../PrayedAndFollowButtons/PrayedAndFollowButtons';
import {CommentType} from '../../7_shared/api/axios/types/responseTypes';
type CommentariesProps = {
  prayerId: number;
  prayerName: string;
  fetchPrayers: () => Promise<void>;
  comments: CommentType[] | undefined;
};
export const Commentaries: FC<CommentariesProps> = ({
  prayerId,
  prayerName,
  comments,
  fetchPrayers,
}) => {
  const styles = getStyles(colors);
  return (
    <View>
      <View style={styles.commentaries}>
        <FlatList
          data={comments}
          renderItem={comment => (
            <Comment
              userId={comment.item.userId}
              creationDate={comment.item.createdAt}
              body={comment.item.body}
            />
          )}
          ListHeaderComponent={
            <>
              <View style={styles.content}>
                <ScreenHeader
                  namePage={prayerName}
                  fetchPrayers={fetchPrayers}
                />
                <PrayerInformation prayerId={prayerId} />
                <PrayedAndFollowButtons prayerId={prayerId} />
              </View>
              <Text style={styles.header}>Comments</Text>
            </>
          }
        />
      </View>
    </View>
  );
};

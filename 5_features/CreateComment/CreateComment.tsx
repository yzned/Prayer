import React, {FC} from 'react';
import {colors} from '../../7_shared/Colors/colors';
import {getStyles} from './styles';

import {View} from 'react-native';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {InputComment} from '../../7_shared/UI/inputComment/InputComment';
import {createCommentsRequest} from '../../7_shared/api/axios/requests/Prayers';
type CommentariesProps = {
  prayerId: number;
  fetchComments: () => Promise<void>;
};
type FormValues = {
  body: string;
};
export const CreateComment: FC<CommentariesProps> = ({
  prayerId,
  fetchComments,
}) => {
  const styles = getStyles(colors);
  const schema = yup.object({
    body: yup.string().required(),
  });
  const {...methods} = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const onSubmit = async ({body}: FormValues) => {
    await createCommentsRequest({body, prayerId});
    fetchComments();
  };
  return (
    <View style={styles.inputComment}>
      <Controller
        control={methods.control}
        name="body"
        render={({field: {value, onChange}}) => (
          <View>
            <InputComment
              value={value}
              onChange={onChange}
              onPress={methods.handleSubmit(onSubmit)}
            />
          </View>
        )}
      />
    </View>
  );
};

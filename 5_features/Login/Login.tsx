import {View, Text, Image, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {getStyles} from './styles';
import {colors} from '../../7_shared/Colors/colors';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Input} from '../../7_shared/UI/input/input';
import {Eye} from '../../7_shared/UI/Eye/Eye';
import {PrimaryButton} from '../../7_shared/UI/buttons/primaryButton/PrimaryButton';
import TextButton from '../../7_shared/UI/textButton/TextButton';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/core';
import {signInRequest} from '../../7_shared/api/axios/requests/Authentication';
import {useDispatch} from 'react-redux';
import {loginToAccount} from '../../1_app/redux/duck/accountData/slice';
import Storage from '../../7_shared/api/storage/token';
type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const styles = getStyles(colors);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(5, 'min'),
  });

  const {...methods} = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const [showPassword, setShowPassword] = useState(true);

  const handleShowingPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const toRegistration = () => {
    navigation.navigate('registration');
  };
  const onSubmit = async ({email, password}: FormValues) => {
    const response = await signInRequest({email, password});
    dispatch(loginToAccount({token: response.token}));
    Storage.setItem('token', response.token);
  };
  return (
    <ImageBackground
      source={require('../../7_shared/assets/icons/png/Mask.png')}
      style={styles.registration}>
      <View style={styles.registrationContent}>
        <Text style={styles.header}>Log in</Text>
        <Controller
          control={methods.control}
          name="email"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              label="Email"
              placeholder="Enter your e-mail"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              isError={methods.formState.errors.email ? true : false}
              isPassword={false}
              isActive={
                methods.getValues('email') && !methods.formState.errors.email
                  ? true
                  : false
              }
            />
          )}
        />
        {methods.formState.errors.email && (
          <Text style={styles.errrorMesage}>Enter correct e-mail</Text>
        )}
        <Controller
          control={methods.control}
          name="password"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              label="Password"
              placeholder="Enter your password"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              isError={methods.formState.errors.password ? true : false}
              isPassword={showPassword}
              isActive={
                methods.getValues('email') && !methods.formState.errors.email
                  ? true
                  : false
              }
              icon={
                <View style={styles.eye}>
                  <Eye
                    isError={methods.formState.errors.password ? true : false}
                    showPassword={showPassword}
                    onPress={handleShowingPassword}
                    isActive={
                      methods.getValues('password') &&
                      !methods.formState.errors.password
                        ? true
                        : false
                    }
                  />
                </View>
              }
            />
          )}
        />
        <View style={styles.bottomPart}>
          <PrimaryButton
            name="Confirm"
            disabled={!methods.formState.isValid}
            onPress={methods.handleSubmit(onSubmit)}
          />
          <View style={styles.bottomPartContent}>
            <Text style={styles.bottomPartText}>Don’t have an account? </Text>
            <TextButton text="Sign up" onPress={toRegistration} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

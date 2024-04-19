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
import {signUpRequest} from '../../7_shared/api/axios/requests/Authentication';
import {useAppDispatch} from '../../7_shared/hooks/reduxHooks';
import Storage from '../../7_shared/api/storage/token';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/core';
import {loginToAccount} from '../../1_app/redux/duck/accountData/slice';
type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export default function Registration() {
  const styles = getStyles(colors);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useAppDispatch();
  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(5, 'min'),
    confirmPassword: yup
      .string()
      .required('Both passwords must match')
      .test('Both passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });
  const toLogIn = () => {
    navigation.navigate('login');
  };

  const {...methods} = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const [showPassword, setShowPassword] = useState(true);

  const handleShowingPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const onSubmit = async ({name, email, password}: FormValues) => {
    const response = await signUpRequest({email, name, password});
    dispatch(loginToAccount({token: response.token}));
    Storage.setItem('token', response.token);
  };

  return (
    <ImageBackground
      source={require('../../7_shared/assets/icons/png/Mask.png')}
      style={styles.registration}>
      <View style={styles.registrationContent}>
        <Text style={styles.header}>Registration</Text>
        <Controller
          control={methods.control}
          name="name"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              label="Name"
              placeholder="Enter your name"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              isPassword={false}
              isActive={
                methods.getValues('name') && !methods.formState.errors.name
                  ? true
                  : false
              }
            />
          )}
        />
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
              isRequired={true}
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
                methods.getValues('password') &&
                !methods.formState.errors.password
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
        <Controller
          control={methods.control}
          name="confirmPassword"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              label="Confirm your password"
              placeholder="Enter your password again"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              isRequired={true}
              isError={methods.formState.errors.confirmPassword ? true : false}
              isPassword={showPassword}
              isActive={
                methods.getValues('confirmPassword') &&
                !methods.formState.errors.confirmPassword
                  ? true
                  : false
              }
              icon={
                <View style={styles.eye}>
                  <Eye
                    isError={
                      methods.formState.errors.confirmPassword ? true : false
                    }
                    showPassword={showPassword}
                    onPress={handleShowingPassword}
                    isActive={
                      methods.getValues('confirmPassword') &&
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
        {methods.formState.errors.confirmPassword && (
          <Text style={styles.errrorMesage}>Passwords must match</Text>
        )}
        <View style={styles.bottomPart}>
          <PrimaryButton
            name="Register"
            disabled={!methods.formState.isValid}
            onPress={methods.handleSubmit(onSubmit)}
          />
          <View style={styles.bottomPartContent}>
            <Text style={styles.bottomPartText}>Already have an account? </Text>
            <TextButton text="Log in" onPress={toLogIn} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

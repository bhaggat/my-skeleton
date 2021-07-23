import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  Alert,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomIcons from '../components/CustomIcons';
import Colors from '../constants/Colors';
import ToastService from '../services/ToastService';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GlobalStyles from '../constants/GlobalStyles';
import {validateEmail} from '../services/Validations';
import LocalIcons from '../constants/LocalIcons';

export default function Login(props) {
  let tempEmail = '';
  let tempPass = '';
  if (__DEV__) {
    // tempEmail = 'bhavesh.webosmotic@gmail.com';
    // tempEmail = 'nirmal.webosmotic@gmail.com';
    // tempEmail = 'devang.webosmotic.01@gmail.com';
    // tempEmail = 'dhruv.webosmotic@gmail.com';
    tempEmail = 'devang.webosmotic@gmail.com';
    tempPass = 'WO@develop6';
    // tempEmail = 'ian@pubble.co';
    // tempPass = 'Sh@ne1!123';
  }
  const [email, setEmail] = useState(tempEmail);
  const [password, setPassword] = useState(tempPass);
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const emailRef = useRef(false);
  const passwordRef = useRef(false);

  const login = async () => {
    if (!email) {
      emailRef.current.focus();
      ToastService({message: 'Please enter your email address'});
      return;
    }
    if (!validateEmail(email)) {
      ToastService({message: 'Please enter a valid email address'});
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      ToastService({message: 'Please enter password'});
      return;
    }

    setLoader(true);
    try {
     
    } catch (err) {
      setLoader(false);
      console.log('err', err);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        style={GlobalStyles.flex1}
        extraScrollHeight={50}
        contentContainerStyle={GlobalStyles.flexGrow1}>
        <View style={styles.dataContainer}>
          <Image
            style={styles.logo}
            source={LocalIcons.pngIconSet.logo}
          />
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text
                style={styles.inputLabel}
                accessibilityLabel="Enter Email Address">
                Email
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <CustomIcons
                type={'MaterialIcons'}
                style={styles.inputIcon}
                color={'grey'}
                name={'email'}
                size={20}
              />
              <TextInput
                accessible={true}
                value={email}
                ref={emailRef}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="me@example.com"
                placeholderTextColor="grey"
                style={styles.input}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <View
              style={styles.labelContainer}
              accessibilityLabel="Enter Password">
              <Text style={styles.inputLabel}>Password</Text>
            </View>
            <View style={styles.inputContainer}>
              <CustomIcons
                type={'MaterialIcons'}
                color={'grey'}
                name={'lock'}
                size={20}
                style={styles.inputIcon}
              />
              <TextInput
                value={password}
                ref={passwordRef}
                placeholder="Password"
                placeholderTextColor="grey"
                style={styles.input}
                onSubmitEditing={login}
                accessible={true}
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
              />
              {password ? (
                <TouchableOpacity
                  style={{justifyContent: 'center'}}
                  onPress={() => setShowPassword(!showPassword)}>
                  <CustomIcons
                    style={styles.passwordIcon}
                    type={'Ionicons'}
                    color={'grey'}
                    name={
                      showPassword ? 'ios-eye-outline' : 'ios-eye-off-outline'
                    }
                    size={20}
                  />
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
          </View>
          <TouchableOpacity
            disabled={loader}
            onPress={login}
            style={styles.btnContainer}
            accessible={true}
            accessibilityLabel="Sign In">
            {loader ? (
              <ActivityIndicator color={Colors.primaryInvert} />
            ) : (
              <Text style={styles.btnText}>Sign In</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() =>
              props.navigation.navigate('ForgotPassword', {email})
            }>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.primaryBg,
    flex: 1,
  },
  passwordIcon: {
    paddingHorizontal: 10,
  },
  dataContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: GlobalStyles.windowWidth * 0.4,
    width: GlobalStyles.windowWidth * 0.4,
    marginTop: GlobalStyles.windowHeight * 0.11,
    marginBottom: 50,
  },
  fieldContainer: {
    width: GlobalStyles.windowWidth * 0.8,
    marginTop: 10,
  },
  labelContainer: {
    alignSelf: 'flex-start',
  },
  inputLabel: {
    color: Colors.primaryInvert,
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  inputIcon: {
    marginLeft: 10,
  },
  input: {
    fontSize: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
    borderRadius: 10,
    flexShrink: 1,
    height: 45,
    paddingHorizontal: 10,
  },
  btnContainer: {
    backgroundColor: Colors.primary,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    width: 120,
  },
  btnText: {
    color: Colors.primaryInvert,
    fontWeight: '600',
    fontSize: 15,
  },
  linkContainer: {
    marginTop: 16,
  },
  linkText: {
    fontSize: 16,
    color: Colors.primaryInvert,
  },
});

import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hi from login</Text>
      <Button title="Sign Up!" onPress={() => navigation.navigate('Signup')} />
    </SafeAreaView>
  );
};

export default Login;

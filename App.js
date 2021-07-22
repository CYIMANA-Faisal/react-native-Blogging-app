import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text } from 'react-native';
import {  DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import Main from './src/components/Main';
import HomeScreen from './src/components/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from './src/components/Posts';
import {PostsProvider} from './src/context/postsContext';
import {UsersProvider} from './src/context/usersContext';
import { CommentsProvider } from './src/context/commentContext';
import PostDetail from './src/components/PostDetail';
import Users from './src/components/Users';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff',
    accent: '#ffffff',
    background: '#ffffff',
    text: "black"
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <UsersProvider>
      <PostsProvider>
        <CommentsProvider>
          <PaperProvider theme={theme}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="Dashboard" component={HomeScreen} />
                <Stack.Screen name="Posts" component={Posts} />
                <Stack.Screen name="UsersList" component={Users} />
                <Stack.Screen name="ReadPost" component={PostDetail} />
              </Stack.Navigator>
              <StatusBar style="auto" />
            </NavigationContainer>
          </PaperProvider>
        </CommentsProvider>
      </PostsProvider>
    </UsersProvider>
  );
}

const styles = StyleSheet.create({
  appBar: {
    paddingTop: 10
  },
});

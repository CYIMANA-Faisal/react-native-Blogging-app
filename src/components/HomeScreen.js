import React, {useState, useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native-paper';
import { PostsContext } from '../context/postsContext';
import { UsersContext } from '../context/usersContext';


const styles = StyleSheet.create({
    mainScreenContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dashboardCards: {
        width: "80%",
        height: 100,
        backgroundColor: "#0F9D58",
        borderRadius: 10,
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection:'row'
    },
    cardText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "700"
    },
    buttons:{
        fontSize:10
    }
});

const HomeScreen = ({ navigation }) => {
    const posts = useContext(PostsContext);
    const {users} = useContext(UsersContext);
    return ( 
        <View style={styles.mainScreenContainer}>
            <View style={styles.dashboardCards}>
                <Text style= {styles.cardText}>
                    {users.length}  Users
                </Text>
                <Button onPress={() => {navigation.navigate('UsersList')}}>
                    <Icon name="eye" size={26} color="#fff" />
                </Button>
                <Button onPress={() => {}}>
                    <Icon name="plus" size={26} color="#fff" />
                </Button>
            </View>
            <View style={styles.dashboardCards}>
                <Text style= {styles.cardText}>
                    {posts.length}  Posts
                </Text>
                <Button onPress={() => {navigation.navigate('Posts')}}>
                    <Icon name="eye" size={26} color="#fff" />
                </Button>
                <Button onPress={() => {}}>
                    <Icon name="plus" size={26} color="#fff" />
                </Button>
            </View>
        </View>
     );
}
 
export default HomeScreen;
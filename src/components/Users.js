import React, {useState, useContext} from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Paragraph, Title, Card } from 'react-native-paper';
import { UsersContext } from '../context/usersContext';
import { Button } from 'react-native-paper';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    mainScreenContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    scrollView: {
        width:"90%",
    },
    actions:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    }
});

const Users = () => {
    const {users, deleteUser} = useContext(UsersContext)
    return ( 
        <View style={styles.mainScreenContainer}>
            <ScrollView style={styles.scrollView}>
            <List.AccordionGroup>
                {
                    users.map((user) => {
                        return (
                            <Card key={user.id}>
                                <Card.Content>
                                <Title>{user.name}</Title>
                                <Paragraph>{user.email}</Paragraph>
                                </Card.Content>
                                <Card.Actions>
                                    <Button onPress={() => {deleteUser(user.id)}}>
                                        <Icon name="trash" size={30} color="red" /><Text style={{color:"black"}}>Delete</Text>
                                    </Button>
                                    <Button >
                                        <Icon name="pencil" size={30} color="#0F9D58" /> <Text style={{color:"black"}}>Edit</Text>
                                    </Button>
                                </Card.Actions>
                            </Card>
                        )
                    })
                }
            </List.AccordionGroup>
            </ScrollView>
        </View>
     );
}
 
export default Users;
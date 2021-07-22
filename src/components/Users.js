import React, {useState, useContext} from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Paragraph, Title } from 'react-native-paper';
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
    const {users} = useContext(UsersContext)
    return ( 
        <View style={styles.mainScreenContainer}>
            <ScrollView style={styles.scrollView}>
            <List.AccordionGroup>
                {
                    users.map((user) => {
                        return (
                            <List.Accordion title={user.username} id={user.id}>
                                 <List.Item title={user.email} />
                                 <View style={styles.actions}>
                                    <Button >
                                        <Icon name="trash" size={30} color="red" />
                                    </Button>
                                    <Button >
                                        <Icon name="pencil" size={30} color="#0F9D58" />
                                    </Button>
                                </View>
                            </List.Accordion>
                        )
                    })
                }
            </List.AccordionGroup>
            </ScrollView>
        </View>
     );
}
 
export default Users;
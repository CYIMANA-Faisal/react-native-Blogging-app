import React, {useState, useContext} from 'react';
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Paragraph, Title } from 'react-native-paper';
import { PostsContext } from '../context/postsContext';
import { Button } from 'react-native-paper';


const styles = StyleSheet.create({
    mainScreenContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    post:{
        marginTop:24,
        padding: 20,
        backgroundColor: "#0F9D58",
        fontSize: 25,
        width: "80%",
        borderRadius: 10,
        color: '#ffffff',
        width: "100%"
    },
    scrollView: {
        width:"90%",
    },
    postText: {
        color: "#fff",
        fontWeight: "400",
    },
    postTitle: {
        color: "#fff",
    },
    readButton: {
        backgroundColor: 'white',
    }
});

const Posts = ({ navigation }) => {
    const posts = useContext(PostsContext);
    console.log(posts);

    return ( 
        <View style={styles.mainScreenContainer}>
            <ScrollView style={styles.scrollView}>
                {
                    posts.map((post) => {
                        return (
                            <View style={styles.post} key={post.id}>
                                <Title style={styles.postTitle}>{post.title}</Title>
                                <Paragraph style={styles.postText}>
                                    {post.body.slice(0, 80) + " ....."}
                                </Paragraph>
                                <Button style={styles.readButton} color="#0F9D58" onPress={() => {navigation.navigate("ReadPost", {id: post.id})}}>
                                    Read the post
                                </Button>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
     );
}

export default Posts;
import React, {useState, useContext} from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import { Title, Text, Paragraph, Button, Subheading, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PostsContext } from '../context/postsContext';
import { CommentsContext } from '../context/commentContext';

const styles = StyleSheet.create({
    mainScreenContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title:{
        color: "#0F9D58"
    },
    actions:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    },
    comment:{
        padding:20
    },
});
const PostDetail =  ({ navigation, route }) => {
    const {comments} = useContext(CommentsContext)
    const postId = route.params.id;
    const {posts} = useContext(PostsContext);
    const [post, setPost] = useState(posts.filter( post => post.id === postId));
    return ( 
        <View style={styles.mainScreenContainer}>
            <ScrollView>
                <Title>{post[0].title}</Title>
                <Subheading>
                    {post[0].body}
                </Subheading>
                <Title>Comments</Title>
                <View>
                  {
                      comments.map((comment) => {
                          if (comment.postId === postId) {
                            return(
                                <View style={styles.comment} key={comment.id}>
                                      <Paragraph>
                                          {comment.body}
                                      </Paragraph>
                                      <Subheading>By {comment.email}</Subheading>
                                      <Divider></Divider>
                                </View>
                            )
                          }
                      })
                  }  
                </View>
            </ScrollView>
        </View>
     );
}
 
export default PostDetail;
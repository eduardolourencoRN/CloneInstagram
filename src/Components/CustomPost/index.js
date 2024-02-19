import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { storiesData } from '../../Data';

const PostItem = ({ userId, username, imageUri }) => {
    const [selectedHeart, setSelectedHeart] = useState(true);
    const [selectedBookmark, setSelectedBookmark] = useState(true);

    const toggleIcon = () => {
        setSelectedHeart(!selectedHeart);
    };

    const toggleIconMark = () => {
        setSelectedBookmark(!selectedBookmark);
    };

    // Encontrar o objeto correspondente na matriz storiesData pelo ID do usuário
    const userStories = storiesData.find((story) => story.id === userId);

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image
                    source={{ uri: imageUri }}
                    style={styles.ProfileImagePost}
                />
                <Text style={styles.username}>{username}</Text>
            </View>
            <Image source={{ uri: imageUri }} style={styles.postImage} />
            <View style={styles.iconContainer}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={toggleIcon}
                >
                    {selectedHeart ? (
                        <Icon name='heart-outline' size={28} />
                    ) : (
                        <Image
                            source={require('../../Images/heart.jpg')}
                            style={styles.IconHeart}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name='chatbubble-outline' size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name='paper-plane-outline' size={25} />
                </TouchableOpacity>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        marginLeft: Platform.OS === 'android' ? 210 : 230,
                    }}
                >
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={toggleIconMark}
                    >
                        {selectedBookmark ? (
                            <Icon name='bookmark-outline' size={26} />
                        ) : (
                            <Image
                                source={require('../../Images/bookmark.png')}
                                style={styles.IconBookmark}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.description}>Descrição do post...</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.likedByText}>Curtido por</Text>
                <Text>
                    {userStories &&
                        userStories.likes.map((like, index) => (
                            <Text key={index}>
                                {like}
                                {index !== userStories.likes.length - 1
                                    ? ', '
                                    : ''}
                            </Text>
                        ))}
                </Text>
            </View>
        </View>
    );
};

export default PostItem;

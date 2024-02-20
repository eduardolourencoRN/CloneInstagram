import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { storiesData } from '../../Data/index';

const PublishPost = () => {
    const renderStory = ({ item }) => (
        <Image source={{ uri: item.image }} style={styles.deviceImage} />
    );

    return (
        <FlatList
            data={storiesData}
            renderItem={renderStory}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Definindo duas colunas
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    deviceImage: {
        width: '45%',
        aspectRatio: 1,
        resizeMode: 'cover',
        margin: '2.5%',
    },
});

export default PublishPost;

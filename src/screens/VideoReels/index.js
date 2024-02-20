import React from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    StatusBar,
    Image,
} from 'react-native';
import { storiesData } from '../../Data';

const { width, height } = Dimensions.get('window');

const ImageFeed = () => {
    const renderImageItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={storiesData}
                renderItem={renderImageItem}
                keyExtractor={(item) => item.id.toString()}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageContainer: {
        width,
        height,
    },
    image: {
        width: width, // Define a largura da imagem como a largura da tela
        height: height, // Define a altura da imagem como a altura da tela
        resizeMode: 'cover', // Mantém a proporção da imagem e a ajusta ao tamanho do contêiner
    },
});

export default ImageFeed;

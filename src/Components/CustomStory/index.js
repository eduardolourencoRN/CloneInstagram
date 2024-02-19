// Importações necessárias
import React, { useState } from 'react';
import { Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import { styles } from './style';

const StoryItem = ({ image, name }) => {
    return (
        <View style={styles.containerStoryItemStyle}>
            <TouchableOpacity style={styles.storyItemContainer}>
                <Image source={{ uri: image }} style={styles.storyImage} />
                <Text style={styles.storyName}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StoryItem;

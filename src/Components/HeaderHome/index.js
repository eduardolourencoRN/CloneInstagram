import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { styles } from './style';

const CustomHeader = ({ stylesX }) => {
    return (
        <View style={[styles.header, stylesX]}>
            <Image
                source={require('../../Images/instagram.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => console.log('Icon 1 pressed')}>
                    <Ionicons name='heart-outline' size={27} color='black' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Icon 2 pressed')}>
                    <Image
                        source={require('../../Images/chat.png')}
                        resizeMode='contain'
                        style={{ width: 25, height: 25 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomHeader;

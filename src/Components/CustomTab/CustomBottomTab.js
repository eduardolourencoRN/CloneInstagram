import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { styles } from './style';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                let iconName;
                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Graph') {
                    iconName = 'search';
                } else if (route.name === 'Graph') {
                    iconName = 'search';
                } else if (route.name === 'PublishPost') {
                    iconName = 'diff-added';
                } else if (route.name === 'VideoReels') {
                    iconName = 'video';
                } else if (route.name === 'PersonDetails') {
                    iconName = 'person';
                }

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={[
                            styles.tabItem,
                            isFocused && styles.tabItemFocused,
                        ]}
                    >
                        <Icon
                            name={iconName}
                            size={24}
                            color={isFocused ? '#000' : '#696969'}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;

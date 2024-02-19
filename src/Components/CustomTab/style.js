import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        height: 60,
    },
    tabItemFocused: {
        backgroundColor: '#fff',
    },
    tabText: {
        fontSize: 16,
        color: '#ccc',
    },
    tabTextFocused: {
        color: '#fff',
    },
});

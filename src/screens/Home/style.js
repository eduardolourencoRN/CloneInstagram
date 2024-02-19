import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'ios' ? 50 : 5,
    },
    logo: {
        width: 100,
        height: 40,
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 20,
    },
});

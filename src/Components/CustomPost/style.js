import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        gap: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    username: {
        fontWeight: 'bold',
        marginRight: 5,
        color: 'black',
    },
    postImage: {
        width: '100%',
        height: 400,
    },
    iconContainer: {
        flexDirection: 'row',
        gap: 20,
        marginHorizontal: 10,
    },
    iconButton: {
        width: 25,
        height: 50,
        alignItems: 'center',
        paddingVertical: 10,
    },
    ProfileImagePost: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
    },
    IconHeart: {
        width: 30,
        height: 30,
    },
    IconBookmark: {
        width: 23,
        height: 23,
    },
    likedByContainer: {},
    description: {
        marginHorizontal: 15,
    },
    likedByName: {
        marginHorizontal: 15,
    },
    likedByText: {
        marginHorizontal: 15,
    },
});

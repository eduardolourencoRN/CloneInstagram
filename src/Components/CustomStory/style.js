import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    storyItemContainer: {
        alignItems: 'center',
        marginHorizontal: 6,
    },
    storyImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: 'rgb(135,206,250)', // Cor da borda da história
    },
    storyName: {
        marginTop: 5,
        fontSize: 12,
    },
    containerStory: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },

    containerStoryItemStyle: {
        borderBottomWidth: 0.3,
        borderColor: '#ccc',
        paddingBottom: 40,
    },
});

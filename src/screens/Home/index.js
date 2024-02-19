import React, { useState } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { styles } from './style';
import CustomHeader from '../../Components/HeaderHome';
import StoryItem from '../../Components/CustomStory';
import { storiesData } from '../../Data';
import PostItem from '../../Components/CustomPost';

const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        // Coloque aqui a lógica para atualizar os stories e posts
        setTimeout(() => setRefreshing(false), 2000); // Exemplo: simular um delay de 2 segundos
    };

    return (
        <View style={styles.screen}>
            <CustomHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#000', '#689F38']}
                        progressBackgroundColor='#fff'
                    />
                }
            >
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ maxHeight: 120 }}
                    >
                        {storiesData.map((item) => (
                            <StoryItem
                                key={item.id}
                                name={item.name}
                                image={item.image}
                            />
                        ))}
                    </ScrollView>
                    {storiesData.map((item) => (
                        <PostItem
                            key={item.id}
                            username={item.name}
                            imageUri={item.image}
                            userId={item.id}
                        />
                    ))}
                </View>
                <View
                    style={{
                        height: 50,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
            </ScrollView>
        </View>
    );
};
export default HomeScreen;

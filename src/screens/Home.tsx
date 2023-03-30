import { VStack, FlatList, HStack, Heading, Text } from 'native-base';
import { useState } from 'react';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
    const [groupSelected, setGroupSelected] = useState('costas');
    const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
    const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra']);
    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}

            />

            <VStack flex={1} px={8}>
                <HStack
                    justifyContent="space-between"
                    mb={5}
                >
                    <Heading color="gray.200" fontSize="md">
                        Exercícios
                    </Heading>

                    <Text color="gray.200" fontSize="xl">
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{
                        paddingBottom: 20
                    }}
                />


            </VStack>
        </VStack>
    );
}
import { Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    label: string;

    position: 'left' | 'right';

    //Métodos
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function FAB(
    {
        label,

        position = 'left',

        onPress,
        onLongPress
    }: Props) {
    return (
        <Pressable
            // activeOpacity={0.9}
            style={
                ({ pressed }) =>
                    [styles.floatingButton,
                    (position === 'right') ? styles.positionRight : styles.positionLeft,
                    pressed ? { opacity: 0.5 } : { opacity: 1 }
                    ]
            }
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,

        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 15,
        elevation: 3
    },
    positionLeft: {
        left: 20
    },
    positionRight: {
        right: 20
    }
});

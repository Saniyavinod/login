import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image, useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import MaskedView from "@react-native-masked-view/masked-view";
import { StatusBar } from 'expo-status-bar';
import {styles} from './styles'

import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';

const Index = () => {
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    const windowHeight = useWindowDimensions().height;

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Loading....</Text>
            </View>
        );
    } else {
        return (
            <>
                <SafeAreaView style={styles.safeArea}>
                    <ImageBackground
                        source={require('../assets/images/Background.jpg')}
                        style={styles.background}
                    >
                        <StatusBar style="light" backgroundColor="black" />
                        <View style={styles.mainContainer}>
                            {/* Header Section */}
                            <View style={[
                                styles.headerContainer,
                                {
                                    height: windowHeight > 768 ? windowHeight * 0.25 : windowHeight * 0.35,
                                },
                            ]}>
                                <View style={styles.headerContent}>
                                    <View>
                                        <View style={styles.logoContainer}>
                                            <Image
                                                source={require('../assets/images/line 12.png')}
                                                style={styles.logoLine}
                                            />
                                            <MaskedView
                                                maskElement={
                                                    <Text style={styles.hscoreText}>HScore</Text>
                                                }
                                            >
                                                <LinearGradient
                                                    colors={['#ffffff', '#878787']}
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 1, y: 0 }}
                                                >
                                                    <Text style={[styles.hscoreText, { opacity: 0 }]}>HScore</Text>
                                                </LinearGradient>
                                            </MaskedView>
                                            <Image
                                                source={require('../assets/images/line 12.png')}
                                                style={styles.logoLine}
                                            />
                                        </View>
                                        <MaskedView
                                            maskElement={
                                                <Text style={styles.comingSoonText}>Coming Soon!</Text>
                                            }
                                        >
                                            <LinearGradient
                                                colors={['#ffffff', '#878787']}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }}
                                            >
                                                <Text
                                                    style={[
                                                        styles.comingSoonText,
                                                        { opacity: 0 },
                                                    ]}
                                                >
                                                    Coming Soon!
                                                </Text>
                                            </LinearGradient>
                                        </MaskedView>
                                    </View>
                                    <Text style={styles.descriptionText}>
                                        Lorem ipsum dolor sit amet consectetur. Et purus volutpat nunc tristique a. Sit accumsan et lorem tortor massa turpis. A elit leo duis massa mattis amet.
                                    </Text>
                                </View>
                            </View>

                            {/* Form Section */}
                            <View style={styles.formContainer}>
                                <BlurView intensity={30} tint="systemThickMaterialLight" style={styles.blurView}>
                                    <GestureHandlerRootView style={styles.gestureView}>
                                        <View>
                                            <Text style={styles.waitlistTitle}>Join our waitlist</Text>
                                            <Text style={styles.waitlistSubtitle}>
                                                Lorem ipsum dolor sit consectetur.
                                            </Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <BlurView intensity={30}>
                                                <TextInput
                                                    placeholder="Full Name"
                                                    placeholderTextColor="white"
                                                    style={styles.input}
                                                />
                                            </BlurView>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <BlurView intensity={30}>
                                                <TextInput
                                                    placeholder="Mobile Number"
                                                    placeholderTextColor="white"
                                                    style={styles.input}
                                                />
                                            </BlurView>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <BlurView intensity={30}>
                                                <TextInput
                                                    placeholder="Email"
                                                    placeholderTextColor="white"
                                                    style={styles.input}
                                                />
                                            </BlurView>
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <LinearGradient
                                                colors={['#ef3288', '#1355d9', '#87cefa']}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 0 }}
                                                style={styles.buttonGradient}
                                            >
                                                <TouchableOpacity style={styles.button}>
                                                    <Text style={styles.buttonText}>Join Now</Text>
                                                    <Image
                                                        source={require('../assets/images/Vector.png')}
                                                        style={styles.buttonIcon}
                                                    />
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    </GestureHandlerRootView>
                                </BlurView>
                            </View>

                            {/* Footer */}
                            <View style={styles.footerContainer}>
                                <Text style={styles.footerText}>© 2024 HScore. All rights reserved.</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </SafeAreaView>
            </>
        );
    }
};


export default Index;

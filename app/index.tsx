import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import MaskedView from "@react-native-masked-view/masked-view";
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

    if (!fontsLoaded) {
        return <View><Text>Loading....</Text></View>;
    } else {
        return (
            <>
                <SafeAreaView style={{ flex: 1 }}>
                    <ImageBackground
                        source={require('../assets/images/Background.jpg')}
                        style={styles.background}
                    >
                        {/* Add any content you want inside the background */}
                        <View style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
                            <View style={{ backgroundColor: "black", zIndex: 1, height: "25%", paddingTop: 80, paddingHorizontal: 20 }}>
                                <View style={{ flex: 1, display: "flex", gap: 10, alignItems: "center", width: "100%", backgroundColor: "", justifyContent: "center" }}>
                                    <View style={{ display: "flex" }}>
                                        
                                        <View style={{ display: "flex", flexDirection: "row" }}>
                                            <Image source={require('../assets/images/line 12.png')} style={{ zIndex: 10, height: 20 }} />
                                            <MaskedView maskElement={<Text style={{ color: "white", fontSize: 16,fontFamily:"Inter_400Regular" }}>HScore</Text>}>
                                            <LinearGradient
                                                // Button Linear Gradient
                                                colors={['#ffffff', '#878787']}
                                                start={{ x: 0, y: 0 }}  // Start from the left
                                                end={{ x: 1, y: 0 }}><Text style={{opacity:0,color: "white", fontSize: 16,fontFamily:"Inter_400Regular" }}>HScore</Text>
                                                </LinearGradient>
                                                </MaskedView>
                                            <Image source={require('../assets/images/line 12.png')} style={{ zIndex: 10, height: 20 }} />
                                        </View>
                                        
                                        <MaskedView maskElement={<Text style={{ color: "white", fontSize: 48, fontWeight: 600,fontFamily:"Inter_600SemiBold" }}>Coming Soon!</Text>}>
                                        <LinearGradient
                                                
                                                colors={['#ffffff', '#878787']}
                                                start={{ x: 0, y: 0 }}  
                                                end={{ x: 1, y: 0 }}>
                                                    <Text style={{ opacity:0,color: "white", fontSize: 48, fontWeight: 600,fontFamily:"Inter_600SemiBold" }}>Coming Soon!</Text>
                                                </LinearGradient>
                                                </MaskedView>
                                    </View>
                                    <Text style={{ lineHeight:24,color: "gray", textAlign: "center", fontSize: 16,fontFamily:"Inter_400Regular" }}>Lorem ipsum dolor sit amet consectetur. Et purus volutpat nunc tristique a. Sit accumsan et lorem tortor massa turpis.
                                        A elit leo duis massa mattis amet.</Text>
                                </View>
                            </View>

                            <View style={{ zIndex: 1, paddingHorizontal: 20 }}>
                                <BlurView intensity={30} tint="systemThickMaterialLight" style={{ borderWidth: .5, borderColor: "white", borderRadius: 10 }}>
                                    <GestureHandlerRootView style={{ display: "flex", alignItems: "center", backgroundColor: '', borderWidth: 4, paddingVertical: 20, paddingHorizontal: 20, gap: 20, borderRadius: 10, borderColor: "white" }}>
                                        <View>
                                            <Text style={{ textAlign: "center", fontSize: 24, color: "white", fontWeight: 600,fontFamily:"Inter_600SemiBold" }}>Join our waitlist</Text>
                                            <Text style={{ fontSize: 16, color: "white",fontFamily:"Inter_300Light" }}>Lorem ipsum dolor sit consectetur. </Text>
                                        </View>
                                        <View style={{ width: "100%" }}>
                                            <BlurView intensity={30}>
                                                <TextInput placeholder='Full Name' placeholderTextColor="white" style={{
                                                    backgroundColor: "",
                                                    padding: 20,
                                                    borderWidth: .5,
                                                    borderColor: "white",
                                                    borderRadius: 10,
                                                    height: 60,
                                                    color: "white",
                                                    fontSize: 16,
                                                    fontFamily:"Inter_400Regular"
                                                }}></TextInput>
                                            </BlurView>

                                        </View>
                                        <View style={{ width: "100%" }}>
                                            <BlurView intensity={30}>
                                                <TextInput placeholder='Mobile Number' placeholderTextColor="white" style={{
                                                    backgroundColor: "",
                                                    padding: 20,
                                                    borderWidth: .5,
                                                    borderColor: "white",
                                                    borderRadius: 10,
                                                    height: 60,
                                                    fontSize: 16,
                                                    fontFamily:"Inter_400Regular"
                                                }}></TextInput>
                                            </BlurView>

                                        </View>
                                        <View style={{ width: "100%" }}>
                                            <BlurView intensity={30}>
                                                <TextInput placeholder='Email' placeholderTextColor="white" style={{
                                                    backgroundColor: "",
                                                    padding: 20,
                                                    borderWidth: .5,
                                                    borderColor: "white",
                                                    borderRadius: 10,
                                                    height: 60,
                                                    fontSize: 16,
                                                    fontFamily:"Inter_400Regular"
                                                }}></TextInput>
                                            </BlurView>
                                        </View>
                                        <View style={{ width: "100%" }}>
                                            <LinearGradient
                                                
                                                colors={['#ef3288', '#1355d9', '#87cefa']}
                                                start={{ x: 0, y: 0 }} 
                                                end={{ x: 1, y: 0 }}
                                                style={{
                                                    borderRadius: 10,
                                                    borderWidth: 0.3,
                                                    borderColor: "white",
                                                    display: "flex",
                                                    justifyContent: "center", 
                                                    alignItems: "center",      
                                                }}
                                            >
                                                <TouchableOpacity
                                                    style={{
                                                        paddingVertical: 18,
                                                        width: "100%",
                                                        borderRadius: 10,
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center",  
                                                        alignItems: "center",      
                                                    }}
                                                >
                                                    <Text style={{ color: "white", fontWeight: "500", fontSize: 14,fontFamily:"Inter_600SemiBold" }}>
                                                        Join Now
                                                    </Text>
                                                    <Image
                                                        source={require('../assets/images/Vector.png')}
                                                        style={{ marginLeft: 8 }} 
                                                    />
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </View>
                                    </GestureHandlerRootView>
                                </BlurView>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", paddingBottom: 20 }}>
                                <Text style={{ color: "white",fontFamily:"Inter_400Regular" }}>© 2024 HScore. All rights reserved.</Text>
                            </View>

                        </View>

                    </ImageBackground>
                </SafeAreaView>
            </>
        );
    }

};

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        zIndex: -1,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: "black"
    }
});

export default Index
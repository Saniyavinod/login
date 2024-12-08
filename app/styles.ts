import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    background: {
        flex: 1,
        zIndex: -1,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    headerContainer: {
        backgroundColor: 'black',
        zIndex: 1,
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    headerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoLine: {
        height: 20,
    },
    hscoreText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Inter_400Regular',
    },
    comingSoonText: {
        fontSize: 48,
        fontWeight: '600',
        fontFamily: 'Inter_600SemiBold',
        color: 'white',
    },
    descriptionText: {
        lineHeight: 24,
        color: 'gray',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
    },
    formContainer: {
        paddingHorizontal: 20,
    },
    blurView: {
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    gestureView: {
        alignItems: 'center',
        paddingVertical: 20,
        gap: 20,
    },
    waitlistTitle: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        fontFamily: 'Inter_600SemiBold',
    },
    waitlistSubtitle: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Inter_300Light',
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        padding: 20,
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: 10,
        height: 60,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
    },
    buttonContainer: {
        width: '100%',
    },
    buttonGradient: {
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: 'white',
    },
    button: {
        paddingVertical: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Inter_600SemiBold',
    },
    buttonIcon: {
        marginLeft: 8,
    },
    footerContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    footerText: {
        color: 'white',
        fontFamily: 'Inter_400Regular',
    },
});
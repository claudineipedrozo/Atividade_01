import React, { useState } from "react";
import { Image, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import logo from '../../assets/logo.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image 
                            source={logo} 
                            style={styles.logotipo}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.welcomeContainer}>
                        <Text style={styles.title}>Bem vindo de volta!</Text>
                        <Text style={styles.subtitle}>
                            Faça login para continuar
                        </Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Digite seu email</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            mode="outlined"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                            placeholder="seu@email.com"
                            left={<TextInput.Icon icon="email" />}
                        />

                        <Text style={styles.label}>Digite sua senha</Text>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            mode="outlined"
                            style={styles.input}
                            placeholder="Sua senha"
                            secureTextEntry={secureTextEntry}
                            left={<TextInput.Icon icon="lock" />}
                            right={
                                <TextInput.Icon 
                                    icon={secureTextEntry ? "eye" : "eye-off"} 
                                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                                />
                            }
                        />

                        <Button 
                            mode="contained"
                            style={styles.button}
                            onPress={() => console.log('Login pressed')}
                        >
                            Entrar
                        </Button>

                        <Button 
                            mode="text"
                            style={styles.forgotPassword}
                            onPress={() => console.log('Forgot password')}
                        >
                            Esqueci minha senha
                        </Button>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    keyboardView: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    logotipo: {
        width: 150,
        height: 150,
    },
    welcomeContainer: {
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
        textDecorationLine: 'underline',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    formContainer: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
        marginTop: 16,
    },
    input: {
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        marginTop: 20,
        paddingVertical: 8,
    },
    forgotPassword: {
        marginTop: 12,
    }
});
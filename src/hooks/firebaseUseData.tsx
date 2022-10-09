import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import { Block, Button, Modal, Text, Input, Image } from '../components/';

export const currentUser = auth().currentUser;
export const onSignUp = async (email: string, password: string, name: string, photoURL: string) => {
    let responce;
    try {
        responce = await auth().createUserWithEmailAndPassword(email, password);
        try {
            const storageCurrentUser = await storage().ref(String(responce.user.uid) + '.png');
            const storageCurrent = await storageCurrentUser.putFile(photoURL);
            const ref = await storage().ref((responce.user.uid) + '.png').getDownloadURL();
            await auth().currentUser.updateProfile({
                displayName: name,
                photoURL: ref,
            })
            // responce = await auth().signInWithEmailAndPassword(email, password);

            return ({ status: 'success', message: 'User added!' })

        } catch (err) {
            return ({ status: 'fail', message: 'Fail to add user!' })
        }
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            return ({ status: 'fail', message: 'That email address is already in use!' })
        }

        if (error.code === 'auth/invalid-email') {
            return ({ status: 'fail', message: 'That email address is invalid!' })
        }
        return ({ status: 'fail', message: error })
    }

}
export const onSignIn = async (email: string, password: string) => {
    let responce;
    try {
        responce = await auth().signInWithEmailAndPassword(email, password);
        return ({ status: 'success', message: 'User added!' })
    } catch (error) {

        return ({ status: 'fail', message: error })
    }

}
export const addPost = async (message: string, audience: string, filePath: string) => {
    let responce;

    try {
        let name = String(currentUser.uid + String(new Date())) + '.png';
        const storageCurrentUser = await storage().ref(name);
        const storageCurrent = await storageCurrentUser.putFile(filePath);
        const ref = await storageCurrentUser.getDownloadURL();
        console.log(ref)
        responce = await firestore().collection('posts').add({
            message,
            audience,
            filePath: ref,
            userProfile: currentUser.photoURL,
            userName: currentUser.displayName,
            user: currentUser.uid,
            createdAt: new Date(),
        })
        console.log({ status: 'success', message: 'Post added!' })
        return ({ status: 'success', message: 'Post added!' })
    } catch (error) {
        console.log({ status: 'fail', message: error })
        return ({ status: 'fail', message: error })
    }
}
export const getPosts = async () => {
    let responce;
    try {
        responce = await firestore().collection('posts').get();
        return responce.docs.map(doc => doc.data());
    } catch (error) {
        console.log({ status: 'fail', message: error })
        return ({ status: 'fail', message: error })
    }
}
export const getMyPosts = async () => {
    let responce;
    try {
        responce = await firestore().collection('posts').where('user', '==', currentUser?.uid).get();
        return responce.docs.map(doc => doc.data());
    } catch (error) {
        console.log({ status: 'fail', message: error })
        return ({ status: 'fail', message: error })
    }
}  
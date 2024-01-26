import Toast from 'react-native-simple-toast';

export const showToast = (message: string) => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
};
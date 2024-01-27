import { RESULTS, checkNotifications, requestNotifications } from 'react-native-permissions';
import Toast from 'react-native-simple-toast';

/**
 * show toast at the bottom
 * @param message
 */
export const showToast = (message: string) => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
};

export const checkAndTakeNotificationPermission = async () => {
    const check = await checkNotifications()
    console.log('check-', check)
    if (check.status != RESULTS.GRANTED) {
        const request = await requestNotifications([])
        console.log('request-', request)
    }
}
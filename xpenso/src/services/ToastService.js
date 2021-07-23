import Toast from 'react-native-simple-toast';

export default function ToastService({message, isLong}) {
  Toast.show(message, isLong ? Toast.LONG : Toast.SHORT);
}

import { MessageProps } from '@paljs/ui/Chat';

const messages: MessageProps[] = [
  {
    message: 'Meet me there',
    reply: false,
    date: new Date().toLocaleTimeString(),
    type: 'map',
    latitude: 30.789901,
    longitude: 30.999093,
    sender: 'Abhi',
    avatar: '',
  },
];

export default messages;

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        // ramp-up
        {
            duration: '5m',
            target: 100
        },
        {
            duration: '30m',
            target: 100
        },
        // ramp-down
        {
            duration: '5m',
            target: 0
        }
    ]
}

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}

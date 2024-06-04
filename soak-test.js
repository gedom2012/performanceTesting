import http from 'k6/http';
import { sleep } from 'k6';

// To identify issues like memory leaks and resource depletion that may only appear after prolonged periods of continuous use.

export const options = {
    stages: [
        // ramp-up
        {
            duration: '5m',
            target: 1000
        },
        {
            duration: '24h',
            target: 1000
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

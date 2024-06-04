import http from 'k6/http';
import { sleep } from 'k6';

// increase and decrease very fast using a bunche of users

export const options = {
    stages: [
        // ramp-up
        {
            duration: '2m',
            target: 10000
        },
        // ramp-down
        {
            duration: '1m',
            target: 0
        }
    ]
}

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}

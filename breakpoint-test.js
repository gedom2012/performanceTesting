import http from 'k6/http';
import { sleep } from 'k6';

// stress until the application has errors or crash
// this one is very important to determine or maximum capacity
// furthermore to define the specifications and the necessary infrastructure to achieve our capacity target

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
}

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}

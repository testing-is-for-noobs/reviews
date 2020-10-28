import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        // { duration: '1m', target: 1 }, 
        // { duration: '3m', target: 1 },
        // { duration: '1m', target: 10 },
        // { duration: '3m', target: 10 },
        // { duration: '1m', target: 100 }, 
        // { duration: '3m', target: 100 },
        { duration: '2m', target: 1000 },
        { duration: '3m', target: 1000 },
        { duration: '1m', target: 0 },
      ],
};

export default function () {
  http.get('http://localhost:3000/reviews/31/');
  sleep(1); // seconds
}

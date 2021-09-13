import http from 'k6/http';

import { sleep } from 'k6';

//init
export let options = {
    vus: 5,
    duration: '60s',
};

// vu script
export default function () {
    let res = http.get('http://localhost:3000');
    console.log(res.status);

    sleep(5);
};

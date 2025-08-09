import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 500,
    duration: '5m',
    thresholds: {
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 600']
    }
};

export default function () {
    const req1 = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products'
    };

    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const req2 = {
        method: 'GET',
        url: `https://fakestoreapi.com/products/${randomNumber}`
    }

    const responses = http.batch([req1, req2]);
    responses.forEach((response) => {
        check(response, {
            'Response status was 200': (res) => res.status == 200,
            'Body is not empty': (res) => res.body && res.body.length > 0
        });
    });
}

export function handleSummary(data) {
  return {
    "relatório.html": htmlReport(data),
  };
}
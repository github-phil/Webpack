import {fn} from './rander.js';
import style from '../css/style.css';
fn('div', style);
console.log(process.env);
console.log(style)
let baseUrl = '';
if (process.env.NODE_ENV === 'dev') {
    console.log('在开发环境');
    fetch(`${baseUrl}/login`).then((res) => {
        Console.log(res);
    });
} else {
    console.log('在生产环境');
    baseUrl = 'http://www.api.com';
    fetch(`${baseUrl}/login`).then((res) => {
        Console.log(res);
    });
}

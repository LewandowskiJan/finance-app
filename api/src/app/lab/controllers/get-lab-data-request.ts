import http from 'http';
import { UtilDaoService } from '../../shared/util-dao.service';
import { Pointer } from '../models/pointer-schema';

exports.requestLoop = setInterval(() => {
  http.get('http:192.168.0.20:5000', (response: any) => {
    let str = '';
    response.on('data', (chunk: string) => {
      str += chunk;
    });

    response.on('end', () => {
      console.log(JSON.parse(str));
      UtilDaoService.add({ body: JSON.parse(str) }, Pointer);
    });
  });
}, 60_000);

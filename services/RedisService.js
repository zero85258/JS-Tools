import redis from 'redis';
import { promisifyAll } from 'bluebird';
import config from '../config/config'; 

promisifyAll(redis);

class RedisService {
  constructor() {
    if(!RedisService.instance) {
      this.client = null;
      RedisService.instance = this;
    }
    return RedisService.instance;
  }
  getClient() {
    if (this.client && this.client.connected) return this.client;
    this.client = redis.createClient({host: config.redis});;
    this.client.on('error', err => {
      console.error(err)
      this.client.quit();
    })
    return this.client;
  }
  ping() {
    return this.getClient().pingAsync();
  }
  get(key) {
    return this.getClient().getAsync(key);
  } 
  set(key, value, ex) {
    return this.getClient().setAsync(key, value, 'EX', ex);
  }
  incr(key) {
    return this.getClient().incrAsync(key);
  }
}

export default new RedisService();

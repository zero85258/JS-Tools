import mongoose from 'mongoose';
import config from '../config/config'; 

/*
Connection ready state

0 = disconnected
1 = connected
2 = connecting
3 = disconnecting
*/

class MongoDbService {
  constructor() {
    if (!MongoDbService.instance) {
      this.analyticsConnection = null
      this.ecConnection = null;
      MongoDbService.instance = this;
    }
    return MongoDbService.instance;
  }
  getAnalyticsConnection() {
    if (this.analyticsConnection && this.analyticsConnection.readyState === 1) return this.analyticsConnection;
    this.analyticsConnection = mongoose.createConnection(config.dsn, { poolSize: 200, keepAlive: true });
    return this.analyticsConnection; 
  }
  getEcConnection() {
    if (this.ecConnection && this.ecConnection.readyState === 1) return this.ecConnection;
    this.ecConnection = mongoose.createConnection(config.ec_dsn, { poolSize: 200, keepAlive: true });
    return this.ecConnection; 
  }
}

export default new MongoDbService();

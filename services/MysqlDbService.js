import mysql from 'mysql';
import { promisifyAll } from 'bluebird';
import mysqlHostConfig from '../config/mysql';

class MysqlDbService {
  constructor() {
    if (!MysqlDbService.instance) {
      this.pools = {};
    }
    return MysqlDbService.instance;
  }
  getPools(domain) {
    const config = mysqlHostConfig[domain];
    if (this.pools[domain]) return this.pools[domain];
    this.pools[domain] = mysql.createPool({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database
    });
    promisifyAll(this.pools[domain]);
    return this.pools[domain];
  }
  async getConnection(domain) {
    const pool = this.getPools(domain);
    try {
      const connection = await pool.getConnectionAsync();
      promisifyAll(connection);
      return connection;
    } catch(err) {
      throw new Error(err);
    }
  }
  async query(domain, sql, value) {
    try {
      const connection = await this.getConnection(domain);
      const formatedSql = mysql.format(sql, value);
      //console.log(formatedSql)
      const raw = await connection.queryAsync(formatedSql);
      connection.release();
      return raw;
    } catch(err) {
      throw new Error(err);
    }
  }
}

export default new MysqlDbService();

import { createConnection, ConnectionOptions } from "typeorm";
import dbConfig from "./ormconfig";

class DatabaseConnectionManager {
  public static async connect() {
    const connection = await createConnection();
    //dbConfig as ConnectionOptions /*you can ignore the `as` operator for now */,
    // https://github.com/typeorm/typeorm/issues/3286
    // const driver = connection.driver;
    // driver.postgres.defaults.parseInputDatesAsUTC = true;
    return connection;
  }
}

export default DatabaseConnectionManager;

import * as mysql from 'promise-mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wlduddkQ1!',
  database: 'sernia',
  multipleStatements: true

});

/**
 * 
 * @param sql 
 * @param collback 
 */
export async function get_data(sql:string, collback:any) {
  await connection.then(connection => {
    //console.log(connection);
    connection.query(sql, function(error, result){
      return collback(result);
    });
  });
}

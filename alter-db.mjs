import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'truyenhot',
  port: 3306
});

async function run() {
  try {
    await pool.query('ALTER TABLE `novel` ADD COLUMN `posterUrl` varchar(191) NULL DEFAULT NULL AFTER `coverUrl`;');
    console.log('ALTER success');
  } catch(e) {
    if (e.code === 'ER_DUP_FIELDNAME') {
      console.log('Column already exists');
    } else {
      console.error(e);
    }
  }
  process.exit(0);
}
run();

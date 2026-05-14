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
    // Tạo bảng settings dạng key-value
    await pool.query(`
      CREATE TABLE IF NOT EXISTS \`setting\` (
        \`key\` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        \`value\` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        \`updatedAt\` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3),
        PRIMARY KEY (\`key\`)
      ) ENGINE=MyISAM CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    console.log('✅ Tạo bảng setting thành công');

    // Seed giá trị mặc định
    const defaults = [
      ['bank_id',          'TPB'],
      ['bank_account',     '08040125109'],
      ['bank_name',        'TRINH HUU HUYNH'],
      ['exchange_rate',    '1000'],
      ['bonus_percent',    '0'],
    ];

    for (const [key, value] of defaults) {
      await pool.query(
        'INSERT IGNORE INTO `setting` (`key`, `value`) VALUES (?, ?)',
        [key, value]
      );
    }
    console.log('✅ Seed dữ liệu mặc định thành công');
  } catch (e) {
    console.error('❌ Lỗi:', e.message);
  }
  process.exit(0);
}

run();

// // const mysql = require('mysql2/promise');

// // export async function createDepartmentTableIfNotExists(departmentName) {
// //   const connection = await mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: 'suriya@05',
// //     database: 'book-store'
// //   });

// //   const tableName = `department_${departmentName.replace(/\s+/g, '_').toLowerCase()}`;
// //   const createTableSQL = `
// //     CREATE TABLE IF NOT EXISTS ${tableName} (
// //       id INT AUTO_INCREMENT PRIMARY KEY,
// //       studentId INT,
// //       roll VARCHAR(255),
// //       username VARCHAR(255) UNIQUE,
// //       password VARCHAR(255),
// //       year VARCHAR(255),
// //       degree VARCHAR(255)
// //     );
// //   `;

// //   await connection.execute(createTableSQL);
// //   await connection.end();

// //   return tableName;
// // }

// // export async function addStudentToDepartment(studentData, departmentName) {
// //   const tableName = await createDepartmentTableIfNotExists(departmentName);
// //   const connection = await mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: 'suriya@05',
// //     database: 'book-store'
// //   });

// //   const insertStudentSQL = `
// //     INSERT INTO ${tableName} (studentId, roll, username, password, year, degree)
// //     VALUES (?, ?, ?, ?, ?, ?);
// //   `;

// //   const { id, roll, username, password, year, degree } = studentData;
// //   await connection.execute(insertStudentSQL, [id, roll, username, password, year, degree]);
// //   await connection.end();
// // }

// // module.exports = {
// //   createDepartmentTableIfNotExists
// // //   addStudentToDepartment
// // };


import mysql from 'mysql2/promise';

export async function createDepartmentTableIfNotExists(departmentName) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'suriya@05',
    database: 'book-store'
  });

  const tableName = `${departmentName.replace(/\s+/g, '_').toLowerCase()}_department`;
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      studentId INT,
      roll VARCHAR(255),
      username VARCHAR(255) UNIQUE,
      password VARCHAR(255),
      year VARCHAR(255),
      degree VARCHAR(255)
    );
  `;

  await connection.execute(createTableSQL);
  await connection.end();

  return tableName;
}
// export async function addStudentToDepartment(studentId, departmentName) {
//     const tableName = await createDepartmentTableIfNotExists(departmentName);
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: 'suriya@05',
//       database: 'book-store'
//     });
  
//     const insertStudentSQL = `
//       INSERT INTO ${tableName} (studentId, roll, username, password, year, degree)
//       VALUES (?, ?, ?, ?, ?, ?);
//     `;
  
//     const studentData = { id: studentId, roll: '', username: '', password: '', year: '', degree: '' }; // Adjust with actual data if needed
//     await connection.execute(insertStudentSQL, [studentData.id, studentData.roll, studentData.username, studentData.password, studentData.year, studentData.degree]);
//     await connection.end();
//   }
export async function addStudentToDepartment(studentId, departmentName) {
    const tableName = await createDepartmentTableIfNotExists(departmentName);
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'suriya@05',
      database: 'book-store'
    });
  
    const insertStudentSQL = `
      INSERT INTO ${tableName} (studentId, roll, username, password, year, degree, department)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;
  
    const studentData = { id: studentId, roll: '', username: 'unique_username', password: '', year: '', degree: '', department: '' }; // Adjust with actual data if needed
    
    try {
      await connection.execute(insertStudentSQL, [studentData.id, studentData.roll, studentData.username, studentData.password, studentData.year, studentData.degree]);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        console.error('Duplicate entry error:', error.message);
        // Handle duplicate entry error
        return { error: 'Username already exists' };
      }
      console.error('Error:', error.message);
      return { error: 'An error occurred' };
    } finally {
      await connection.end();
    }
}


// import mysql from 'mysql2/promise';

// export async function createDepartmentTableIfNotExists(departmentName) {
//   const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'suriya@05',
//     database: 'book-store'
//   });

//   const tableName = `${departmentName.replace(/\s+/g, '_').toLowerCase()}_department`;
//   const createTableSQL = `
//     CREATE TABLE IF NOT EXISTS ${tableName} (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       studentId INT,
//       roll VARCHAR(255),
//       username VARCHAR(255) UNIQUE,
//       password VARCHAR(255),
//       year VARCHAR(255),
//       degree VARCHAR(255)
//     );
//   `;

//   await connection.execute(createTableSQL);
//   await connection.end();

//   return tableName;
// }

// export async function addStudentToDepartment(studentData, departmentName) {
//     const tableName = await createDepartmentTableIfNotExists(departmentName);
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: 'suriya@05',
//       database: 'book-store'
//     });
  
//     const insertStudentSQL = `
//       INSERT INTO ${tableName} (studentId, roll, username, password, year, degree)
//       VALUES (?, ?, ?, ?, ?, ?);
//     `;
  
//     try {
//       await connection.execute(insertStudentSQL, [studentData.id, studentData.roll, studentData.username, studentData.password, studentData.year, studentData.degree]);
//     } catch (error) {
//       if (error.code === 'ER_DUP_ENTRY') {
//         console.error('Duplicate entry error:', error.message);
//         // Handle duplicate entry error
//         return { error: 'Username already exists' };
//       }
//       console.error('Error:', error.message);
//       return { error: 'An error occurred' };
//     } finally {
//       await connection.end();
//     }
// }


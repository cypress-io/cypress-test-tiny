// try {

//     require('dotenv').config();
//     const path = require('path');
//     // TODO:
//     // Seed user data in Redis
//     // Store user data in cookies (or hard code it in the request)
//     // Use existing APIs to seed data by passing all data that is normally passed
//     // If it normally comes from state, hard code it in the request

//     // const redis = require('redis');
//     // const redisClient = redis.createClient();
//     // TODO: see if this can be input as a JSON object instead of a stringified JSON.
//     //  redisClient.set("test-session:123", "{\"cookie\":{\"originalMaxAge\":7776000000,\"expires\":\"2020-02-03T02:13:45.593Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"eb951bee-a8c0-4c61-8e30-a274c24e8b95\",\"username\":\"david\",\"email\":\"markjackson02+david@gmail.com\",\"permissions\":[{\"permissionName\":\"admin\",\"permissionValue\":\"yes\"}]}");

//     const Sequelize = require('sequelize');

//     const env = process.env.NODE_ENV || 'local';
//     const dbConfig = require('../../../server/config/config')[env];

//     const sequelize = new Sequelize(dbConfig.databaseUrl || dbConfig);
//     sequelize
//         .authenticate()
//         .then(() => {
//             console.log('Sequelize connection has been established successfully [plugins/headphones.js].');
//         })
//         .catch((err) => {
//             throw new Error('Sequelize unable to connect to the database [plugins/headphones.js]:', err);
//     });

//     const headphones = sequelize.import(path.join(__dirname, '../../../server/db/models/headphone'));

//     // function deleteHeadphones() {
//     //     return headphones.destroy({ where: {}});
//     // }

//     function bulkCreate(arr) {
//         try {
//             // userId not actually needed since we are bypassing auth in controller, but this is used for headphone history, but also not needed
//             headphones.bulkCreate(arr, { userId: 'eb951bee-a8c0-4c61-8e30-a274c24e8b95' })
//             .then(() => null)
//             .catch((err) => {
//                 console.log(err);
//                 return undefined;
//             });
//         } catch (err) {
//             console.log(err);
//             return undefined;
//         }
//         return null;
//     }

//     function seedHeadphones(arr) {
//         return bulkCreate(arr);
//     }

//     module.exports = {
//         // deleteHeadphones,
//         seedHeadphones,
//     };

// } catch (err) {
//     console.log('ERR', err)
// }
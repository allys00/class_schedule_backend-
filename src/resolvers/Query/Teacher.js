const DB = require('../../../db/db.json');

module.exports = {
    teachers() {
        return DB.teachers
    }
}
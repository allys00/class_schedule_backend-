const DB = require('../../../db/db.json');

module.exports = {
    students() {
        return DB.students;
    }
}
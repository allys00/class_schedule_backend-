const DB = require('../../../db/db.json');


module.exports = {
    classes() {
        return DB.classes
    }
}
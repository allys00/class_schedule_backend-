const DB = require('../../../db/db.json');

module.exports = {
    subscriptions() {
        return DB.subscriptions
            .map(sub => {
                const student = DB.students.find(({ id }) => id === sub.student);
                const classObj = DB.classes.find(({ id }) => id === sub.class);
                
                return {
                    ...sub,
                    student,
                    class: classObj
                }
            })
    }
}
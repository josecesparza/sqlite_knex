const knex = require('knex');

const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
};

function find() {
    return db('cars');
}

function findById(id) {
    return db('cars')
        .where({ id: Number(id) });
}

function insert(post) {
    return db('cars')
        .insert(post)
        .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
    return db('cars')
        .where('id', Number(id))
        .update(post);
}

function remove(id){
    return db('cars')
        .where('id', Number(id))
        .del();
}
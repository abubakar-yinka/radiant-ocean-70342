const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    // let found = false;
    // database.users.forEach(user => {
    //     if(user.id === id) {
    //         found = true;
    //         res.json(user);
    //     }
    // })
    //     if(!found) {
    //         res.status(400).json('No such user');
    //     }

    db.select('*').from('users').where({id})
        .then(user => {
            if(user.length) {
                res.json(user[0])
            } else {
                res.status(400).json('user not found')
            }
        })
}

module.exports = {
    handleProfileGet
}
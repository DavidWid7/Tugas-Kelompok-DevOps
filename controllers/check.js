const checkLoggedin = (req, res, next) => {
    if(req.session.loggedin) next()
    else res.redirect('/')
}

const checkLoggedinAdmin = (req, res, next) => {
    if(req.session.loggedin && req.session.user.username == "admin") next()
    else res.redirect('/home')
}

const checkLogout = (req, res, next) => {
    if(req.session.loggedin) next()
    else res.json({result: 'ERROR', message: 'User is not logged in.'});
}

export { checkLoggedin, checkLoggedinAdmin, checkLogout }
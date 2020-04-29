'use strict';

module.exports = {
    authenticate: require('../controllers/users/authenticate'),
    registerData: require('../controllers/users/register'),
    confirmData: require('../controllers/users/confirm'),
    getData: require('../controllers/users/get'),
    organizationConnect: require('../controllers/users/organization-connect'),
    organizationDisconnect: require('../controllers/users/organization-disconnect'),
    organizationAcclaim: require('../controllers/users/organization-acclaim'),
    organizationBadge: require('../controllers/users/organization-badge'),
    organizationInvite: require('../controllers/users/organization-invite'),
    getInviteData: require('../controllers/users/get-invite'),
    organizationConfirm: require('../controllers/users/organization-confirm'),
    logout: require('../controllers/sessions/destroy')
};

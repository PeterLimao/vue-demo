var actions = {
    configList: function(store, isAdd, message) {
        if (isAdd) {
            store.dispatch('ADDMSGLIST', message);
        } else {
            store.dispatch('DELETEMSGLIST');
        }
    }
};

module.exports = actions;

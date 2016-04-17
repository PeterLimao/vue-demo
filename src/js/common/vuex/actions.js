var actions = {
    configList: function(store, isAdd, message) {
        if (isAdd) {
            store.dispatch('ADDMSGLIST', message);
            console.log(message);
        } else {
            store.dispatch('DELETEMSGLIST');
        }
    }
};

module.exports = actions;

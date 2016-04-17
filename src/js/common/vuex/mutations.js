var mutations = {
    ADDMSGLIST: function(state, message) {
        return state.messages.push(message);
    },
    DELETEMSGLIST: function(state) {
        state.messages.pop();
    }
};

module.exports = mutations;

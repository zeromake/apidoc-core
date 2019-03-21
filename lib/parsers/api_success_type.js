// Same as @apiParam
var apiParser = require('./api_param.js');

function parse(content, source) {
    return apiParser.parse(content, source, 'SuccessType');
}

function path() {
    return 'local.successTypes';
}

/**
 * Exports
 */
module.exports = {
    parse         : parse,
    path          : path,
    method        : 'push',
    markdownFields: [ 'description' ]
};

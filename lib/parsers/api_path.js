// Same as @apiParam
var apiParser = require('./api_param.js');

function parse(content, source) {
    return apiParser.parse(content, source, 'Path');
}

function path() {
    return 'local.path.fields';
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

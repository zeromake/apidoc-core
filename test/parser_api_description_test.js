/*jshint unused:false*/

/**
 * Test: Parser apiDescription
 */

// node modules

// lib modules
var parser = require('../lib/parsers/api_description');

describe('Parser: apiDescription', function() {

    // TODO: Add 1.000 more possible cases ;-)
    var testCases = [
        {
            title: 'Word only',
            content: 'Text',
            expected: {
                description: 'Text'
            }
        },
        {
            title: 'Trim single line',
            content: '   Text line 1 (Begin: 3xSpaces (3 removed), End: 1xSpace). ',
            expected: {
                description: 'Text line 1 (Begin: 3xSpaces (3 removed), End: 1xSpace).'
            }
        },    
        {
            title: 'Trim multi line (spaces)',
            content: '    Text line 1 (Begin: 4xSpaces (3 removed)).\n   Text line 2 (Begin: 3xSpaces (3 removed), End: 2xSpaces).  ',
            expected: {
                description: 'Text line 1 (Begin: 4xSpaces (3 removed)).\n   Text line 2 (Begin: 3xSpaces (3 removed), End: 2xSpaces).'
            }
        },
        {
            title: 'Trim multi line (tabs)',
            content: '\t\t\tText line 1 (Begin: 3xTab (2 removed)).\n\t\tText line 2 (Begin: 2x Tab (2 removed), End: 1xTab).\t',
            expected: {
                description: 'Text line 1 (Begin: 3xTab (2 removed)).\n\t\tText line 2 (Begin: 2x Tab (2 removed), End: 1xTab).'
            }
        },
        {
            title: 'Trim multi line (tabs and space)',
            content: '\t  Text line 1 (Begin: 1xTab, 2xSpaces).\n   Text line 2 (Begin: 3xSpaces, End: 1xTab).\t',
            expected: {
                description: 'Text line 1 (Begin: 1xTab, 2xSpaces).\n   Text line 2 (Begin: 3xSpaces, End: 1xTab).'
            }
        }
    ];

    // create
    it('case 1: should pass all regexp test cases', function(done) {
        testCases.forEach(function(testCase) {
            var parsed = parser.parse(testCase.content);
            (parsed !== null).should.equal(true, 'Title: ' + testCase.title + ', Source: ' + testCase.content);
            parsed.should.eql(testCase.expected);
        });
        done();
    });

});

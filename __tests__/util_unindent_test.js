/*jshint unused:false*/

/**
 * Test: Util unindent
 */

// node modules

// lib modules
var unindent = require('../lib/utils/unindent');

describe('Util: unindent', () => {

    test('should strip common leading spaces', done => {
        expect(unindent('  a\n    b\n   c')).toBe('a\n  b\n c');
        done();
    });

    test('should strip common leading tabs', done => {
        expect(unindent('\t\ta\n\t\t\t\tb\n\t\t\tc')).toBe('a\n\t\tb\n\tc');
        done();
    });

    test('should strip all leading whitespace from a single line', done => {
        expect(unindent('   \t   a')).toBe('a');
        done();
    });

    test('should not modify the empty string', done => {
        var s = '';
        expect(unindent(s)).toBe(s);
        done();
    });

    test(
        'should not modify if any line starts with non-whitespace',
        done => {
            var s = '    a\n   b\nc   d\n   e';
            expect(unindent(s)).toBe(s);
            done();
        }
    );

    test('should strip common leading tabs and keep spaces', done => {
        expect(unindent('\ta\n\t  b\n\t c')).toBe('a\n  b\n c');
        done();
    });

    test(
        'should strip common leading tabs and 1 space on each line',
        done => {
            expect(unindent('\t  a\n\t  b\n\t c')).toBe(' a\n b\nc');
            done();
        }
    );

});

var assert = require('assert');
var MembershipApplication = require('../models/MembershipApplicatoin');

describe('Applying for mission', function () {
    var validApp;

    before(function () {
        validApp = new MembershipApplication({
            first: 'test',
            last: 'user',
            email: 'test@test.com',
            age: 30,
            height: 66,
            weight: 180
        });
    });

    describe('Using valid email, first, last, height, age, weight', function () {
        it('is valid', function () {
            assert(validApp.isValid(), "not valid");
        });

        it('reports a valid email', function () {
            assert(validApp.emailIsValid(), "not valid");
        });

        it('reports a valid Name', function () {
            assert(validApp.isValid(), "not valid");
        });

        it('reports a valid height', function () {
            assert(validApp.heightIsValid(), "not valid");
        });

        it('reports a valid age', function () {
            assert(validApp.ageIsValid(), "not valid");
        });

        it('reports a valid weight', function () {
            assert(validApp.weightIsValid(), "not valid");
        });
    });

    describe('Applicaiton invalid if ...', function () {
        it('is past the valudUntil dates', function () {
            var app = new MembershipApplication({ validUntil: Date.parse('01/01/2010') });
            assert(app.expired());
        });

        it('email is 4 chars or less', function () {
            var app = new MembershipApplication({ email: 'dd' });
            assert(!app.emailIsValid());
        });

        it('email does not contain an @', function () {
            var app = new MembershipApplication({ email: 'thingthing:thing.com' });
            assert(!app.emailIsValid());
        });
    });

});


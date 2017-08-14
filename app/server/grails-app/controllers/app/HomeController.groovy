package app

import grails.rest.*
import grails.converters.*

class HomeController {
    static responseFormats = ['json', 'xml']

    def index() { }
    def kit() { }
    def platform() { }
    def ecosystem() { }
    def contact() { }
    def common() { }

    def sendEmail() {
        def email = request.JSON?.email
        def name = request.JSON?.name
        def message = request.JSON?.message
        [user: name]
    }

    def readDB() {
        hashKey = 123456789L
        rangeKey = '6733308f-5f64-48d2-824d-665290664ae0'
        // Load an item
        foo = ctx.ChallengeService.get(hashKey, rangeKey)
    }

    def writeDB() {
        hashKey = 123456789L
        rangeKey = '6733308f-5f64-48d2-824d-665290664ae0'

        // Save item
        foo = new ChallengeBean(
            accountId: hashKey,
            creationDate: new Date(),
            message: 'Some message of challenge 1',
            title: 'Challenge 1'
        )
        ctx.ChallengeService.save(foo)
    }
}

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

    def sendEmail() {
        def email = request.JSON?.email
        def name = request.JSON?.name
        def message = request.JSON?.message
        [user: name]
    }
}

package app


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

class AdminController {
    static responseFormats = ['json', 'xml']

    @Secured(['ROLE_USER'])
    def index() { }
}

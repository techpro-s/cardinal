package app

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class SchoolController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond School.list(params), model:[schoolCount: School.count()]
    }

    def show(School school) {
        respond school
    }

    @Transactional
    def save(School school) {
        if (school == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (school.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond school.errors, view:'create'
            return
        }

        school.save flush:true

        respond school, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(School school) {
        if (school == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (school.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond school.errors, view:'edit'
            return
        }

        school.save flush:true

        respond school, [status: OK, view:"show"]
    }

    @Transactional
    def delete(School school) {

        if (school == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        school.delete flush:true

        render status: NO_CONTENT
    }
}

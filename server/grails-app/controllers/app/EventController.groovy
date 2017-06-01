package app

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class EventController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Event.list(params), model:[eventCount: Event.count()]
    }

    def show(Event event) {
        respond event
    }

    @Transactional
    def save(Event event) {
        if (event == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (event.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond event.errors, view:'create'
            return
        }

        event.save flush:true

        respond event, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Event event) {
        if (event == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (event.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond event.errors, view:'edit'
            return
        }

        event.save flush:true

        respond event, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Event event) {

        if (event == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        event.delete flush:true

        render status: NO_CONTENT
    }
}

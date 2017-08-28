package app

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class SponsorController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Sponsor.list(params), model:[sponsorCount: Sponsor.count()]
    }

    def show(Sponsor sponsor) {
        respond sponsor
    }

    @Transactional
    def save(Sponsor sponsor) {
        if (sponsor == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (sponsor.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond sponsor.errors, view:'create'
            return
        }

        sponsor.save flush:true

        respond sponsor, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Sponsor sponsor) {
        if (sponsor == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (sponsor.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond sponsor.errors, view:'edit'
            return
        }

        sponsor.save flush:true

        respond sponsor, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Sponsor sponsor) {

        if (sponsor == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        sponsor.delete flush:true

        render status: NO_CONTENT
    }
}

package app

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class ChallengeController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Challenge.list(params), model:[challengeCount: Challenge.count()]
    }

    def show(Challenge challenge) {
        respond challenge
    }

    @Transactional
    def save(Challenge challenge) {
        if (challenge == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (challenge.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond challenge.errors, view:'create'
            return
        }

        challenge.save flush:true

        respond challenge, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Challenge challenge) {
        if (challenge == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (challenge.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond challenge.errors, view:'edit'
            return
        }

        challenge.save flush:true

        respond challenge, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Challenge challenge) {

        if (challenge == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        challenge.delete flush:true

        render status: NO_CONTENT
    }
}

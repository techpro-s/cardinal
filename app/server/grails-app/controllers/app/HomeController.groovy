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

        sendMail {
            from "webapp@cardinal.education"
            to "javier@cardinal.education "
            subject "Contact form"
            text "$name has been send this email, contact $email, message: $message"
        }

        [user: name]
    }
    def sendChallengeEmail (){
        def challenge = request.JSON?.challenge
        def name=request.JSON?.name
        def phone=request.JSON?.phone
        def email=request.JSON?.email
        def message=request.JSON?.message
        def school=request.JSON?.schoolname
        sendMail {
            from "webapp@cardinal.education"
            to "challenges@cardinal.education"//challenges@cardinal.education
            subject "Participant Request: $challenge"
            text "$name wants to register this school: $school \n contact info : \n email $email phone $phone  \n message: $message"
        }
 render (view: '/home/sendEmail', model: [user: name])
    }
}

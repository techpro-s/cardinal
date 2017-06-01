package app

class Event {
    String title
    Text description
    Date startDate
    Date endDate
    boolean enable =false
    SupportedLang lang
    Event parent

    static hasMany = [events: Event]
    static constraints = {
        parent nullable: true
        events validator: { val, obj ->
            def retval = true
            if (obj?.parent) {
                retval = 'event.validator.childnochild.error'
            }
            return retval
        }
    }
}

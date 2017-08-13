package app

class Challenge {
    String title
    String description
    Date startDate
    Date endDate
    boolean enable =false
    SupportedLang lang
    Challenge parent

    static hasMany = [challenges: Challenge, sponsors: Sponsor]

    static constraints = {
        parent nullable: true
        events validator: { val, obj ->
            def retval = true
            if (obj?.parent) {
                retval = 'challenge.validator.childnochild.error'
            }
            return retval
        }
    }
}

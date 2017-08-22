package app

class Challenge {
    String title
    String description
    Date startDate
    Date endDate
    boolean enable =false
    String PDFUrl
    SupportedLang lang=SupportedLang.English
    Challenge parent
    String backGroundImg

    static hasMany = [challenges: Challenge, sponsors: Sponsor]

    static constraints = {
        parent nullable: true,validator: { val, obj ->
            def retval = true
            if (obj?.parent) {
                retval = 'challenge.validator.childnochild.error'
            }
            return retval
        }
    }
}

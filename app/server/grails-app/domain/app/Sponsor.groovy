package app

class Sponsor {

    String name
    String imageUrl
    static constraints = {
        imageUrl validator: { val, obj ->
            def retval=true
            obj.imageUrl?.endsWith('.png')?:{retval='Sponsor.validator.badImage'}
            return retval
        }
    }
}
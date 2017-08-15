package app

class Sponsor {

    String name
    String imageUrl
    static constraints = {
        imageUrl validator: { val, obj ->
            return obj.imageUrl?.endsWith('.png')?true: 'Sponsor.validator.badImage'

        }
    }
}
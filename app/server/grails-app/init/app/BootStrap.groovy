package app

class BootStrap {

    def init = { servletContext ->
        def userRole = new Role('ROLE_USER').save()

        def me = new User('9chito9', 'password').save()

        UserRole.create me, userRole

        UserRole.withSession {
            it.flush()
            it.clear()
        }
    }
    def destroy = {
    }
}

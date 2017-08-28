package app

enum SupportedLang  {
    Spanish('es'), English('en'),French('fr'),Portuguese('pt'),German('de')

    final String id
    public SupportedLang(String id) {
        this.id = id
    }

    String value() { return value }

    static SupportedLang byId(String id) {
        values().find { it.id==id }
    }
}
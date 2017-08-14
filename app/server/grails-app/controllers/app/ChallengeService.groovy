package app

import grails.plugins.awssdk.dynamodb.AbstractDBService

class ChallengeBeanDBService extends AbstractDBService<ChallengeBean> {

    ChallengeBeanDBService() {
        super(ChallengeBean)
    }

}

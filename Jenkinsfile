pipeline {
  stages {

    stage('Run Cypress tests') {
      script {
        dir(env.REPO_NAME) {
          sh """\
            export npm_config_cache="\$(pwd)/.npm"
            CYPRESS_INSTALL_BINARY=0 npm ci --audit false
          """
          sh("npx cypress run")
        }
      }
    }
  }
}


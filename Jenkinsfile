pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'my-node-app'
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }
    
    stages {
        stage("Code") {
            steps {
                echo "Cloning the code"
                git url: "https://github.com/forex-azm/jenkins.git", branch: "master"
            }
        }
        stage("Build") {
            steps {
                echo "Building the code"
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }
        stage("Push to Docker Hub") {
            steps {
                echo "Pushing the image to Docker Hub"
                withCredentials([usernamePassword(credentialsId: "nodeAppDockerHub", passwordVariable: "dockerPassword", usernameVariable: "dockerUsername")]) {
                    sh "docker tag ${DOCKER_IMAGE} ${env.dockerUsername}/${DOCKER_IMAGE}:latest"
                    sh "docker login -u ${env.dockerUsername} -p ${env.dockerPassword}"
                    sh "docker push ${env.dockerUsername}/${DOCKER_IMAGE}:latest"
                }
            }
        }
        stage("Deploy") {
            steps {
                echo "Deploying the code"
                script {
                    def composeExitCode = sh(
                        returnStatus: true,
                        script: "docker-compose -f ${DOCKER_COMPOSE_FILE} down && docker-compose -f ${DOCKER_COMPOSE_FILE} up -d"
                    )
                    if (composeExitCode != 0) {
                        error "Docker Compose failed with exit code ${composeExitCode}"
                    }
                }
            }
        }
    }
}
pipeline {
    agent any
    tools {
        nodejs 'nodejs-18'  // Cambia 'nodejs-18' por el nombre correcto de tu instalación de NodeJS
    }
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true  // Ajusta esta ruta si es necesario
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}

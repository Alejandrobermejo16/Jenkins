pipeline {
    agent any

    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Asegúrate de estar en el directorio correcto si hay subcarpetas
                sh 'npm install'
            }
        }

        stage('Paso 1') {
            steps {
                echo 'Este es el paso 1'
                cat package.json
            }
        }

        stage('Test') {
            steps {
                echo 'Este es el paso de pruebas'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Este es el paso de despliegue'
            }
        }

        stage('Declarative: Post Actions') {
            steps {
                echo 'Pipeline salga bien o salga mal'
                echo 'Pipeline ha fallado!'
            }
        }
    }
}

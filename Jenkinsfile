pipeline {
    agent {
        docker { image 'node:18' }  // Usa una imagen oficial de Node.js
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Hola Mundo') {
            steps {
                echo 'Hola Mundo desde Git!'
            }
        }
        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Ejecutar Pruebas') {
            steps {
                sh 'npm test'
            }
        }
        stage('Construir Artefacto') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Desplegar a Prueba') {
            steps {
                sh 'scp -r ./build usuario@servidor:/ruta/de/despliegue'
            }
        }
        stage('Notificación') {
            steps {
                slackSend(channel: '#general', message: "El Pipeline ha terminado exitosamente!")
                mail to: 'usuario@example.com',
                     subject: "Pipeline terminado",
                     body: "El Pipeline ha terminado exitosamente!"
            }
        }
    }
    post {
        always {
            echo 'Pipeline completado'
        }
        success {
            echo '¡Éxito!'
        }
        failure {
            echo 'Fallido :('
        }
    }
}

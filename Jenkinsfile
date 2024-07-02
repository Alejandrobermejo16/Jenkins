pipeline {
    agent {
        docker { image 'node:18' }  // Usa la imagen de Node.js 18
    }
    stages {
        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'  // Instala las dependencias de Node.js
            }
        }
        stage('Ejecutar Pruebas') {
            steps {
                sh 'npm test'  // Ejecuta pruebas definidas en package.json
            }
        }
        stage('Construir Artefacto') {
            steps {
                sh 'npm run build'  // Construye el artefacto usando un script de npm
            }
        }
    }
    post {
        always {
            echo 'Pipeline completado'
        }
        failure {
            echo 'Fallido :('
        }
    }
}

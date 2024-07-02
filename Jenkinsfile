pipeline {
    agent any

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
                script {
                    sh 'npm install'  // Si usas Node.js, por ejemplo
                }
            }
        }
        stage('Ejecutar Pruebas') {
            steps {
                script {
                    sh 'npm test'  // Comando para ejecutar pruebas unitarias
                }
            }
        }
        stage('Construir Artefacto') {
            steps {
                script {
                    sh 'npm run build'  // Comando para construir artefacto
                }
            }
        }
    }
}

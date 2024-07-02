pipeline {
    agent any  // Usar cualquier agente disponible

    stages {
        // Etapa para construir tu aplicación
        stage('Build') {
            steps {
                // Aquí puedes poner los comandos para construir tu aplicación
                // Ejemplo para una aplicación Node.js:
                sh 'npm install'  // Instalar dependencias
                sh 'npm run build'  // Construir el proyecto
            }
        }

        // Etapa de ejemplo para ejecutar comandos personalizados
        stage('Paso 1') {
            steps {
                script {
                    sh "echo 'hola mundo'"  // Ejecutar un comando simple de ejemplo
                }
            }
        }

        // Etapa para ejecutar pruebas de tu aplicación
        stage('Test') {
            steps {
                // Aquí puedes poner los comandos para ejecutar pruebas
                // Ejemplo para una aplicación Node.js:
                sh 'npm test'  // Ejecutar pruebas
            }
        }

        // Etapa para desplegar tu aplicación
        stage('Deploy') {
            steps {
                // Aquí puedes poner los comandos para desplegar tu aplicación
                // Ejemplo de despliegue:
                echo 'Desplegando la aplicación'
                // sh './deploy.sh'  // Desplegar la aplicación con un script
            }
        }
    }

    post {
        always {
            // Acciones que siempre se ejecutan al final del pipeline
            echo 'Pipeline salga bien o salga mal'
        }
        success {
            // Acciones que solo se ejecutan si el pipeline fue exitoso
            echo 'Pipeline completado exitosamente!'
        }
        failure {
            // Acciones que solo se ejecutan si el pipeline falló
            echo 'Pipeline ha fallado!'
        }
        unstable {
            // Acciones que se ejecutan si el pipeline es inestable
            echo 'Pipeline es inestable.'
        }
        changed {
            // Acciones que se ejecutan si el estado del build cambió
            echo 'El estado del build cambió.'
        }
        aborted {
            // Acciones que se ejecutan si el pipeline fue abortado
            echo 'Pipeline ha sido abortado.'
        }
    }
}

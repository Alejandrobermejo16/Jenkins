pipeline {
    agent any  // Define el tipo de agente que Jenkins usará para ejecutar los builds

    tools {
        nodejs "node"  // Asegúrate de que Node.js está instalado y configurado en Jenkins
    }

    parameters {
        string(name: 'container_name', defaultValue: 'pagina_web', description: 'Nombre del contenedor Docker')
        string(name: 'img_name', defaultValue: 'pagina_img', description: 'Nombre de la imagen Docker')
        string(name: 'tag_image', defaultValue: 'lts', description: 'Tag de la imagen de la página')
        string(name: 'container_port', defaultValue: '80', description: 'Puerto que usa el contenedor')
    }

    stages {
        stage('Install') {
            steps {
                git branch: 'master', url: 'https://github.com/Alejandrobermejo16/Jenkins.git'  // Clona el repositorio
                dir('Jenkins') {
                    sh 'npm install'  // Instala dependencias
                }
            }
        }

        stage('Test') {
            steps {
                dir('Jenkins') {
                    sh 'npm test'  // Ejecuta las pruebas unitarias
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up after the build'
            cleanWs()  // Limpia el workspace
        }

        success {
            echo 'Build was successful!'
            emailext (
                to: 'team@example.com',
                subject: 'Build Success',
                body: 'The build was successful!'
            )  // Envía un correo electrónico de éxito
        }

        failure {
            echo 'Build failed!'
            slackSend channel: '#builds', message: 'Build failed!'  // Envía un mensaje de error a un canal de Slack
        }
    }
}

pipeline {
    agent any

    tools {
        nodejs "node"  // Si necesitas usar una versión específica de Node.js, asegúrate de que está correctamente configurada en Jenkins
    }

    parameters {
        string(name: 'container_name', defaultValue: 'pagina_web', description: 'Nombre contenedor docker')
        string(name: 'img_name', defaultValue: 'pagina_img', description: 'Nombre de la imagen docker')
        string(name: 'tag_image', defaultValue: 'lts', description: 'Tag de la imagen de la pagina')
        string(name: 'container_port', defaultValue: '80', description: 'Puerto que usa el contenedor')
    }

    stages {
        stage('install') {
            steps {
                git branch: 'master', url: 'https://github.com/Alejandrobermejo16/Jenkins.git'  // Extrae los cambios del repositorio
                dir('Jenkins') {
                    // Instalar dependencias de npm
                    sh 'npm install'
                }
            }
        }
    }

    post {
        always {
            // Acciones a realizar siempre, por ejemplo, limpieza
        }
        success {
            // Acciones a realizar si la build es exitosa
        }
        failure {
            // Acciones a realizar si la build falla
        }
    }
}

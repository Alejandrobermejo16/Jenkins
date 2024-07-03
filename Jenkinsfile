pipeline {
    agent any

    tools {
        nodejs "node"
    }
    parameters {
        string(name: 'container_name', defaultValue: 'pagina_web', description: "Nombre contenedor docker");
        string(name: 'img_name', defaultValue: 'pagina_img', description: "Nombre de la imagen docker");
        string(name: 'tag_image', defaultValue: 'lts', description: "Tag de la imagen de la pagina");
        string(name: 'container_port', defaultValue: '80', description: "Puerto que usa el contenedor");
    }

    stages {
        stages('install') {
            steps{
                git branch 'master, url: 'https://github.com/Alejandrobermejo16/Jenkins.git' //extrae los cambios que se han hecho en el repositorio
                dir('Jenkins'){
                    sh 'npm install'
                }
            }
        }
    }
}
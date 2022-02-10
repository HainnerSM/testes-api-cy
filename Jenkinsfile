pipeline {
    agent any
    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/HainnerSM/testes-api-cy'
            }  
        }
        
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
            
            
        }
        
        stage('Executar testes') {
            steps {
                sh 'NO_COLOR=1' sh 'npm run cy:run'
            }
            
            
        }
    }
}
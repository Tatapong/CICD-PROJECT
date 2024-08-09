pipeline {
    agent any
    tools {
        terraform 'Terraform'
    }
    environment {
        AWS_ACCESS_KEY = credentials('AWS_ACCESS_KEY')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    }
    stages {
        stage('cloning the git repository') {
            steps {
                echo 'I am cloning repo'
                git branch: 'main', url: 'https://github.com/Tatapong/CICD-PROJECT.git'
                sh 'git init'
                sh 'ls -l'
            }
        }
        stage('Deploying EKS-Cluster') {
            steps {
                echo 'deploying eks cluster through terraform'
                sh 'terraform --version'
                sh 'terraform init'
                sh 'terraform plan'
                sh 'terraform apply -auto-approve'
            }
        }
    }
}
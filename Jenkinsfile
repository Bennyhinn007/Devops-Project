pipeline {
    agent any

    environment {
        EC2_IP = '54.252.232.174'
        KEY = '/c/Users/benny/Downloads/project.pem'
    }

    stages {
stage('Clone') {
    steps {
        git branch: 'main', url: 'https://github.com/Bennyhinn007/Devops-Project.git'
    }
}
        stage('Install Node + Dependencies') {
            steps {
                sh '''
                curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                sudo apt-get install -y nodejs
                npm install
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                scp -i $KEY -o StrictHostKeyChecking=no -r . ubuntu@$EC2_IP:/home/ubuntu/app

                ssh -i $KEY -o StrictHostKeyChecking=no ubuntu@$EC2_IP << EOF
                cd /home/ubuntu/app
                npm install
                pkill node || true
                nohup node app.js > output.log 2>&1 &
                EOF
                '''
            }
        }
    }
}



pipeline {
    agent any

    environment {
        EC2_IP = '54.252.232.174'
        KEY = 'C:\\Users\\benny\\Downloads\\project.pem'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Bennyhinn007/Devops-Project.git'
            }
        }

        stage('Install Node + Dependencies') {
            steps {
                bat '''
                npm install
                '''
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                scp -i %KEY% -o StrictHostKeyChecking=no -r * ubuntu@%EC2_IP%:/home/ubuntu/app

                ssh -i %KEY% -o StrictHostKeyChecking=no ubuntu@%EC2_IP% ^
                "cd /home/ubuntu/app && npm install && pkill node || true && nohup node app.js > output.log 2>&1 &"
                '''
            }
        }
    }
}

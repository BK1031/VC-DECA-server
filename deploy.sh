#!/bin/sh
echo "Commiting to Github"
read -p 'Enter a commit message: ' commit_message
git add .
git commit -m "$commit_message"
git push
echo "Deploying to mywb.vcs.net"
ssh supadmin@mywb.vcs.net 'pm2 stop VC-DECA-server; cd VC-DECA-server/; git pull; pm2 start VC-DECA-server;'
echo "Deployment complete"
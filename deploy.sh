#!/bin/sh
echo "Commiting to Github"
read -p 'Enter a commit message: ' commit_message
git add .
git commit -m "$commit_message"
git push
echo "Deploying to mywb.vcs.net"
ssh supadmin@mywb.vcs.net 'cd VC-DECA-server/; git pull'
echo "Deployment complete"
echo "Restarting server"
ssh supadmin@mywb.vcs.net 'source ./wb_commands.sh; vcdeca restart'
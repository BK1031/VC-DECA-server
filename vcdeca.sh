function vcdeca() {
  case $1 in
  start)
    if test -f "vcdeca_pid.txt"
    then
      echo "VC DECA Server is already running"
    else
      if [ "$2" = "-noconfig" ] | [ "$2" = "-nc" ]
      then
        echo "Skipping configuration"
        echo "Starting VC DECA Server"
        nohup node VC-DECA-server/index.js > vcdeca.log 2>&1 &
        echo $! > vcdeca_pid.txt
        echo "VC DECA Server is now online!"
      elif [ -z "$2" ]
      then
        echo "Pulling latest config"
        cd VC-DECA-server/
        git pull
        cd ..
        echo "Starting VC DECA Server"
        nohup node VC-DECA-server/index.js > vcdeca.log 2>&1 &
        echo $! > vcdeca_pid.txt
        echo "VC DECA Server is now online!"
      fi
    fi
  ;;
  stop)
    if test -f "vcdeca_pid.txt"
    then
      echo "Stopping VC DECA Server"
      kill -9 `cat vcdeca_pid.txt`
      rm vcdeca_pid.txt
    else
      echo "VC DECA Server is not already running"
    fi
  ;;
  restart)
    if test -f "vcdeca_pid.txt"
    then
      echo "Stopping VC DECA Server"
      kill -9 `cat vcdeca_pid.txt`
      rm vcdeca_pid.txt
      if [ "$2" = "-noconfig" ] | [ "$2" = "-nc" ]
      then
        echo "Skipping configuration"
        echo "Starting VC DECA Server"
        nohup node VC-DECA-server/index.js > vcdeca.log 2>&1 &
        echo $! > vcdeca_pid.txt
        echo "VC DECA Server is now online!"
      elif [ -z "$2" ]
      then
        echo "Pulling latest config"
        cd VC-DECA-server/
        git pull
        cd ..
        echo "Starting VC DECA Server"
        nohup node VC-DECA-server/index.js > vcdeca.log 2>&1 &
        echo $! > vcdeca_pid.txt
        echo "VC DECA Server is now online!"
      fi
    else
      echo "VC DECA Server is not already running"
    fi
  ;;
  status)
    if test -f "vcdeca_pid.txt"
    then
      echo "VC DECA Server is online!"
    else
      echo "VC DECA Server is offline!"
    fi
  ;;
esac
}
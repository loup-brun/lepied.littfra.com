#!/bin/bash
# Rsync deploy script

# 1. Variables 
# Replace variables below with your own
LOCAL_DIR=public/
REMOTE_HOST=lepied.littfra.com
REMOTE_USER=louis
REMOTE_DIR=/var/www/lepied.littfra.com/public/

# 2. The Rsync command
# You can add the `--delete` option to delete ALL FILES in the remote dir (run a backup or dry run first!)
rsync -vrz $LOCAL_DIR $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR

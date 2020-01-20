rsync -vrz --exclude-from=exclude.deploy --delete public/  -e "ssh -p2222" maude25@50.87.144.90:public_html/lepied/

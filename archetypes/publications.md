---
title: {{ replace (replaceRE "[0-9]{2}-(.+)" "$1" .Name) "-" " " }}
slug: {{ .Name }}
date: {{ .Date | dateFormat "2006-01-02" }}
weight: {{ replaceRE "^[0]+([1-9])" "$1" (replaceRE "([0-9]{2})-(.+)" "$1" .Name) }}
description: 
images:
- /{{ .File.Dir }}couverture.png
---

![image couverture](couverture.png)

[pdf compressé (00 Mo)](le-pied-{{replaceRE "[0-9]{2}-(.+)" "$1" .Name}}-compress.pdf)

[pdf original (00 Mo)](le-pied-{{replaceRE "[0-9]{2}-(.+)" "$1" .Name}}.pdf)


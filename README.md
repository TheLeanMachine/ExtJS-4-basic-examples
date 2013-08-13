ExtJS-4-basic-examples
======================

Just a bunch of basic examples using ExtJS 4.

* **Last tested Versions:**
    * ExtJS 4.2.1
    * Apache 2.44

Lauch Ext 4 app on Windows 7
----------------------------
0. [Install Apache](http://www.apachelounge.com/download/) according to README contained in ZIP file
0. Create symbolic link to ```extjs-4-example-app``` folder
    0. Open console **as administrator**
    0. ```cd <APACHE_HTDOCS_FOLDER>```
    0. ```mklink \D <LINK_NAME> <FULL_PATH_TO_EXTJS_APP_FOLDER>``` (```<LINK_NAME>``` will be the context path of the webapp)
0. Start Apache webserver with ```<INSTALLATION_PATH>\bin\httpd.exe``` in console
0. Navigate to ```http://localhost/<LINK_NAME>/``` in browser

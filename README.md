# stances
Learn movements from sports like Saber fencing and Aikido in interactive 3D, made with Mannequin js.

Download the project and launch it on Windows with START.bat. 
Do mind to install node.js before runing the script. 

After the launch you'll see an url where the SIMPLESERVER.js home directory can be reached. You can also make urls like 127.0.0.1:11400/aikido_start.html to see other related projects.
Do note that index.html here is not the real "startpage", but only the mainpage for the Vercel server. The real "startpage" is lasersaber.html.


Note: 
if you open the index.html page (the default online and through index_Vercel.js) you'll see only a selection menu. 
If you want to create own poses you can do this by surfing to aikido_start.html or lasersaber.html.

Generating own poses is possible through the following "code":
You copy the GET POS from the aikido_start.html or lasersaber.html and paste it in a "textfile".
The following symbols have meaning in the json based strings. 
\# = next move in a movelist for the selected avatar (man or female). 

§ = next person or object. The first § in a file means you introduce code for the male, the second § in a file means you add html-like information to your pose. 

In examle beneath the female mannequin has two movements, the male one and on the top-right corner the text 'basis defense stance' will be seen. 

{"version":6,"data":[-3.9000000000000004,[0,0,0],[-0.3,0,-2],[0,0,5],[10.8,38.2,-10.7],[36.6],[4,0,-48.7],[-0.8,-4.6,43.6],[44.5],[-4,0,0],[23.2,-36.8,54.6],[39.4],[30.2,0,0],[118.7,99.7],[-15.8,9.2,52.7],[48.8],[1.4,-14.3,0],[117.2,90.7],-31.5,0,true]}
\#
{"version":6,"data":[-7.8,[0.2,4.9,0],[0.1,6.5,-3.2],[0,0,5],[32.2,42.5,11.7],[74.7],[11.7,5.7,-53.6],[-7.9,-17.6,60.5],[24.8],[-4,0,11.5],[21.1,-25.8,28.3],[66.7],[16.6,-32.5,12.7],[119.6,99.7],[-8.3,17.8,44.6],[61.4],[22.1,-6.8,5],[117.2,90.7],-17.8,3.9,true]}
§
{"version":6,"data":[-3.9,[-180,-6.2,-180],[-0.3,0,-2],[0,0,5],[10.8,38.2,-10.7],[36.6],[4,0,-48.7],[-0.8,-4.6,43.6],[44.5],[-4,0,0],[24.2,-37.3,61],[33.7],[29.8,28.3,0.2],[119.6,99.7],[-14.4,11,52.4],[48.8],[1.4,-14.3,0],[117.2,90.7],39.2,0,false]}
§
Basic defense stance. 

IMPORTANT: Examples can be found in movelists/aikido or movelists/lasersaber

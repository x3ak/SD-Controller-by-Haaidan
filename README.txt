SD CONTROLLER BY HAAIDAN 1.1
A complete controller for the stream Defence game on Twitch.tv, made by ArchonTheWizard.

CONFIGURATION STEPS:

1. Download ALL the files and put them together in the same folder (if they are not).

2. Generate your password token here: https://twitchapps.com/tmi/

3. Right-click on the "configuration.js" file. Open it with NOTEPAD or any other text editor software.

4. Isert your twitch username where it says:  nickname = 'your_twitch_username_here'. DON'T erase the ' ' (quotes). 

5. Insert your oauth-key (generated at STEP 2) where it says:  oauthkey = 'oauth:your_oauthkey_here'. DON'T erase the ' ' (quotes).
Also Include the "oauth:".

Your final configuration file should looks like this sample: https://www.goo.gl/J2WjLQ

6. Press Ctrl + S to save the file. Close it and you're done! Double click on the "interface.html" to open the controller.


***Don't forget to click on the button "connect to chat" before picking up your class.



OPTIONAL

You can also set the twitch player embed dimensions if some of the bottom buttons are hidden due to the screen scrolling. 
In the "configuration.js" you will find:
width = '100%';  //percentage
height = '550';  //pixels
You want to set the height to a smaller value, which can be either in percentage or pixels.

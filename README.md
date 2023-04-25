Project information is on Google Drive: https://drive.google.com/drive/folders/1AAo7UELl4gcavOkN-X5xJD8ufKXhkMT_?usp=sharing

FYI, the data is managed in a Google Sheet: https://docs.google.com/spreadsheets/d/1Q5cd4qkpYxtwQF2EZsKSWvnLvdFRTlVTFdDd4ujiuRo/edit?usp=sharing
    The swatch sort order is set based on the order in the Google Sheet


Prerequisites to work with gatsbyjs: https://www.gatsbyjs.org/tutorial/part-zero/

Getting Started
1. Clone Project from Github: git clone https://github.com/adriannolt/visualizer.git

2. Drop the images into the src directory so that it looks like this:
(Project root)
-src
--styles
--pages
--images
--components
NOTE: You can find the images here: (/Library/Windy Valley Woodworks/6410 Color Visualizer Developments/v2 instructions/images) 

3. Drop the credentials folder into the root of the project.

4. Run npm install

Run the Site
To Launch a dev site on your server: gatsby develop --https



Push Changes Live:
1. NOTE: if you changed images you may need to run "Gatsby clean" to clear all the cached files before running "Gatsby Build"

2. Run "Gatsby build"

3. On your Local: Compress everything in /public. 

4. Go to C-Panel
Public HTML > Visualizer > Web
Leave the Well-Known folder. Delete everything else
Upload the Zipped folder and uncompress it.

When finished with updates, git commit and git push origin master

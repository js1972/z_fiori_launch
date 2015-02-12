# z_fiori_launch
A Fiori App Launcher for Workflow Extended Notifications

This handy html file (index.html) will enable your users to directly launch Fiori approval apps from a workflow notification email!
When a link is tapped/clicked, the relevant Fiori application will open to the detail screen for the relevant work item; all within the Fiori Launchpad.

## Configuration ##
1. Configure Workflow Visualisation with transaction code SWFVISU. Specify BSP_STD as the visualisation type
2. Enter the parameter APP_PATH as "/sap/bc/bsp/sap/z_fiori_launch/index.html" and SAVE the config.
3. Repeat the SWFVISU config for each workflow task you handle with a Fiori app
4. Create a BSP application called z_fiori_launch
5. Create a page within the application called index.html and copy in the contents of index.html from this repo
6. Edit the index.html file to alter the workflow Task Id's to match those you have configured in SWFVISU. Also alter the Fiori app url's to match the apps you use
7. Activate the BSP application

Alternatively you can download the [BSP application](https://github.com/js1972/z_fiori_launch/releases/tag/0.1) and upload it into your SAP system using SAPlink. Then perform the edits as described above.

## Notes ##
All other files except index.html can be ignored... They are just from me playing around with atom.io's jsFormat plugin.
If your Fiori architecture is one with a SAP Gateway Hub, then this application must be served from the SAP Gateway Hub so that it is accessible to incoming connections.

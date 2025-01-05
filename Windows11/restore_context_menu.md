# Restoring the Windows Context Menu
To restore the original Windows context menu for the File Explorer, 
1. open a Command Promt as Administrator and run the following command:
> reg add HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32 /ve /d "" /f
2. Restart Windows

Reference: https://beebom.com/how-get-old-context-menu-windows-11/

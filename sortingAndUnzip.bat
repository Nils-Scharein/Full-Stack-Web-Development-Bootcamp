@echo off
setlocal enabledelayedexpansion

REM =========================
REM Skriptinformationen
REM =========================
set "me=%~nx0"
echo Starting: %me%
echo Current directory: %cd%
echo.

REM =========================
REM Anzahl der Dateiendungen abfragen
REM =========================
set /p count=Wie viele Endungen moechtest du eingeben? 
echo count=%count%
echo.

REM =========================
REM Eingabe der Dateiendungen
REM =========================
set i=1
:input_loop
    set /p extension!i!=Bitte gib Endung !i! ein (z.B. .txt): 
    set /a i+=1
if !i! leq %count% goto input_loop
echo.

REM =========================
REM Ausgabe der eingegebenen Endungen
REM =========================
echo Du hast folgende Endungen eingegeben:
for /L %%x in (1,1,%count%) do (
    echo     Endung %%x: !extension%%x!
)
pause
echo.

REM =========================
REM Verzeichnisse prüfen und erstellen
REM =========================
echo Checking and creating directories...
for /L %%x in (1,1,%count%) do (
    set "ext=!extension%%x!"
    if not exist ".\!ext!" (
        echo     Creating directory .\!ext!
        mkdir ".\!ext!"
    )
)

if not exist ".\zip" (
    echo     Creating directory .\zip
    mkdir ".\zip"
) 
pause
echo.

REM =========================
REM Dateien sortieren und entpacken
REM =========================
echo Unzipping and sorting files...
for /L %%x in (1,1,%count%) do (
    set "ext=!extension%%x!"
    set "foldername=!ext!"
    echo     Processing files with extension !ext!...
    
    for %%f in (*!ext!) do (
        echo         Found file: %%f
        
        if exist ".\!foldername!\%%~nxf" (
            echo         File already exists in target directory, skipping: %%f
        ) else (
            echo         Unzipping file to .\!foldername!
            powershell -command "Expand-Archive -Path '%%f' -DestinationPath '.\!foldername!' -Force"
            echo         Moving file to .\zip
            move "%%f" ".\zip\"
        )
    )
)
echo.

REM =========================
REM Skriptende
REM =========================
echo All files processed.
pause

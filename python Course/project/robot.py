# This program for mac 
# import os

# if __name__ == '__main__':
#     print("Welcome to RoboSpeaker 1.1 Created by Harry")
#     x = input("Enter What you want to say: ")
#     command = f"say {x}"
    # os.system(command)


#todo this program for window
import subprocess

if __name__ == '__main__':
    print("Welcome to RoboSpeaker 1.1 Created by Harry")
    while True:
        text_to_speak = input("Enter what you want to say: ")
        # PowerShell command to speak the text
        powershell_command = f'Add-Type -AssemblyName System.speech; ' \
                            f'$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; ' \
                            f'$speak.Speak("{text_to_speak}")'

        # Execute the PowerShell command
        subprocess.run(["powershell", "-Command", powershell_command], shell=True)

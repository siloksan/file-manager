# File Manager

## Description

This File Manager project is built using Node.js, allowing users to perform basic file and directory operations directly from the command line interface (CLI). The file manager can:

## Navigate directories

Perform file operations (copy, move, delete, rename) Stream file data Gather information about the operating system Calculate file ashes Compress and decompress files.
Note: The File Manager requires Node.js version 22.x.x or higher.

## Getting Started

To start the application, run the following command with your username:

`npm run start -- --username=your_username`

After starting, you should see:

`Welcome to the File Manager, your_username!`

`You are currently in path_to_working_directory`

## Exiting the Application

To exit, press CTRL + C or type .exit in the console. The program will display:

`Thank you for using File Manager, your_username, goodbye!`

## Command Syntax and Usage

### Navigation & Working Directory (NWD)

-   Go up one directory

        ```up```

-   Change directory

        ```cd path_to_directory```

-   List files and directories

        ```ls```

### File Operations

-   Read a file

        ```cat path_to_file```

-   Create an empty file

        ```add new_file_name```

-   Create a new directory

        ```mkdir new_directory_name```

-   Rename a file

        ```rn path_to_file new_filename```

-   Copy

        ```cp path_to_file path_to_new_directory```

-   Move a file

        ```mv path_to_file path_to_new_directory```

-   Delete a file

        ```rm path_to_file```

### OS Information

-   Get End-Of-Line character

        ```os --EOL```

-   CPU Information. Displays the number, model, and clock rate of each CPU:

        ```os --cpus```

-   Home Directory

        ```os --homedir```

-   System User Name

        ```os --username```

-   CPU Architecture

        ```os --architecture```

### Hash Calculation

    	```hash path_to_file```

### Compression & Decompression

-   Compress a file:

        ```compress path_to_file path_to_destination```

-   Decompress a file

        ```decompress path_to_file path_to_destination```

## Example Usage

-   Change to a specific directory

    `cd ./folder_name`

-   List files in the current directory

    `ls`

-   Add a new file

    `add newFile.txt`

-   Copy a file to another directory

    `cp ./newFile.txt ./backup/`

-   Compress a file

    `compress ./file.txt ./file.txt.br`

-   Decompress a file

    `decompress ./file.txt.br ./file.txt`

License
This File Manager project is open source and free to use. Enjoy managing files via the CLI!

#!/bin/bash

# Set to exit on error
set -e

# Print debug info about current directory
echo "Running script from: $(pwd)"

# Configuration for different locations
declare -A LOCATIONS=(
    ["home"]="/home/mati/project/modules/module-blog"
    ["work"]="/workspaces/MATI_campaing_Landing"
)

# Function to validate and set the project location
set_project_location() {
    local location=$1
    
    if [[ -z "${LOCATIONS[$location]}" ]]; then
        echo "Error: Invalid location. Valid options are: ${!LOCATIONS[@]}"
        exit 1
    fi
    
    echo "Checking if directory exists: ${LOCATIONS[$location]}"
    if [ -d "${LOCATIONS[$location]}" ]; then
        PROJECT_ROOT="${LOCATIONS[$location]}"
        PROJECT_BASE="${PROJECT_ROOT}"
        OUTPUT_FILE="${PROJECT_ROOT}/codes_landing.txt"
        echo "✓ Using project root: $PROJECT_ROOT"
        echo "✓ Output will be saved to: $OUTPUT_FILE"
        return 0
    else
        echo "✗ Directory not found: ${LOCATIONS[$location]}"
    fi
    return 1
}

# Parse command line arguments
LOCATION="home"  # Default location
while getopts "l:" opt; do
    case ${opt} in
        l )
            LOCATION=$OPTARG
            ;;
        \? )
            echo "Usage: $0 [-l location]"
            echo "Valid locations: ${!LOCATIONS[@]}"
            exit 1
            ;;
    esac
done

# Try to set the project location
if ! set_project_location "$LOCATION"; then
    # If specified location fails, try the alternative
    for loc in "${!LOCATIONS[@]}"; do
        if [[ "$loc" != "$LOCATION" ]] && set_project_location "$loc"; then
            echo "Warning: Specified location '$LOCATION' not found, using '$loc' instead."
            break
        fi
    done
fi

# Exit if no valid location is found
if [ -z "$PROJECT_ROOT" ]; then
    echo "Error: Project root not found in any configured location."
    exit 1
fi

# Array of files to extract
files=(

apps/matiautomatic-landing/src/components/Countdown.tsx
apps/matiautomatic-landing/src/components/Hero.tsx
apps/matiautomatic-landing/src/components/MatiLogo.tsx
apps/matiautomatic-landing/src/components/SocialLinks.tsx
apps/matiautomatic-landing/src/components/SubscriptionForm.tsx
apps/matiautomatic-landing/src/styles/index.css
apps/matiautomatic-landing/src/App.tsx
apps/matiautomatic-landing/src/main.tsx
apps/matiautomatic-landing/.env
apps/matiautomatic-landing/index.html
apps/matiautomatic-landing/package.json
apps/matiautomatic-landing/postcss.config.js
apps/matiautomatic-landing/tailwind.config.js
apps/matiautomatic-landing/vite.config.ts
apps/smartbuildlab-landing/node_modules
apps/smartbuildlab-landing/src/components/Countdown.tsx
apps/smartbuildlab-landing/src/components/FeaturePrinciples.tsx
apps/smartbuildlab-landing/src/components/Hero.tsx
apps/smartbuildlab-landing/src/components/MatiExplanation.tsx
apps/smartbuildlab-landing/src/components/SmartBuildLogo.tsx
apps/smartbuildlab-landing/src/components/SocialLinks.tsx
apps/smartbuildlab-landing/src/components/SubscriptionForm.tsx
apps/smartbuildlab-landing/src/styles/index.css
apps/smartbuildlab-landing/src/App.tsx
apps/smartbuildlab-landing/src/main.tsx
apps/smartbuildlab-landing/.env
apps/smartbuildlab-landing/index.html
apps/smartbuildlab-landing/package.json
apps/smartbuildlab-landing/postcss.config.js
apps/smartbuildlab-landing/tailwind.config.js
apps/smartbuildlab-landing/vite.config.ts
package.json
README.md
tsconfig.json
turbo.json

)

# Ensure the output file is empty before starting
if [ -n "$OUTPUT_FILE" ]; then
    > "$OUTPUT_FILE"
else
    echo "Error: OUTPUT_FILE is not defined"
    exit 1
fi

# Count how many files we're processing
total_files=${#files[@]}
found_files=0
found_dirs=0
missing_files=0

echo "Processing $total_files files..."

# Function to list files in a directory recursively
list_directory_contents() {
    local dir=$1
    local indent=$2
    
    echo "# Directory: $dir" >> "$OUTPUT_FILE"
    echo "#------------------------------------------------" >> "$OUTPUT_FILE"
    
    # List directories and files separately
    echo "# Contents:" >> "$OUTPUT_FILE"
    find "$dir" -maxdepth 1 -mindepth 1 -type d | sort | while read -r subdir; do
        echo "${indent}Directory: $(basename "$subdir")/" >> "$OUTPUT_FILE"
    done
    
    find "$dir" -maxdepth 1 -mindepth 1 -type f | sort | while read -r file; do
        echo "${indent}File: $(basename "$file")" >> "$OUTPUT_FILE"
    done
    
    echo -e "\n" >> "$OUTPUT_FILE"
}

# Loop through each file and append its contents to the output file
for file in "${files[@]}"; do
    # Skip empty entries
    if [ -z "$file" ]; then
        echo "Skipping empty file entry"
        continue
    fi
    
    # Full path to the file
    full_path="${PROJECT_BASE}/${file}"
    
    # Check if the path exists
    if [ -f "$full_path" ]; then
        #echo "✓ Adding file: $file"
        echo "# $file" >> "$OUTPUT_FILE"
        echo "#------------------------------------------------" >> "$OUTPUT_FILE"
        cat "$full_path" >> "$OUTPUT_FILE"
        echo -e "\n\n" >> "$OUTPUT_FILE"
        found_files=$((found_files+1))
    elif [ -d "$full_path" ]; then
        echo "✓ Adding directory listing: $file"
        list_directory_contents "$full_path" "  "
        found_dirs=$((found_dirs+1))
    else
        echo "✗ MISSING: $file"
        echo "  Full path: $full_path"
        echo "# WARNING: Not found - $file" >> "$OUTPUT_FILE"
        echo "#------------------------------------------------" >> "$OUTPUT_FILE"
        echo "Path does not exist at $full_path" >> "$OUTPUT_FILE"
        echo -e "\n\n" >> "$OUTPUT_FILE"
        missing_files=$((missing_files+1))
    fi
done

# Check if the output file was created and has content
if [ -f "$OUTPUT_FILE" ]; then
    file_size=$(stat -c%s "$OUTPUT_FILE")
    echo "Extraction complete."
    echo "Files processed: $total_files (Found files: $found_files, Found directories: $found_dirs, Missing: $missing_files)"
    echo "Output file: $OUTPUT_FILE (Size: $file_size bytes)"
    
    if [ "$file_size" -eq 0 ]; then
        echo "WARNING: Output file is empty!"
    else
        echo "Output file has content."
    fi
    
    # Print the file permission and owner information
    ls -l "$OUTPUT_FILE"
else
    echo "ERROR: Output file was not created!"
fi
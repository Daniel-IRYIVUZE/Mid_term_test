const fs = require('fs');
const path = require('path');

// Function to read file and process the data
function processFile(inputFile, outputFile) {
    // Read the input file
    const data = fs.readFileSync(inputFile, 'utf-8');
    const lines = data.split(/\r?\n/);
    
    const integerCount = {};
    const duplicates = new Set();

    // Process each line
    lines.forEach(line => {
        // Trim white spaces and validate the line
        const trimmedLine = line.trim();

        // Skip empty lines or lines with non-numeric values
        if (trimmedLine === '' || !/^[-]?\d+$/.test(trimmedLine)) {
            return;
        }

        // Parse integer
        const num = parseInt(trimmedLine, 10);

        // Count occurrences
        if (integerCount[num] !== undefined) {
            integerCount[num]++;
            duplicates.add(num);
        } else {
            integerCount[num] = 1;
        }
    });

    // Convert set to array and sort in ascending order
    const sortedDuplicates = Array.from(duplicates).sort((a, b) => a - b);

    // Write the sorted duplicates to the output file
    fs.writeFileSync(outputFile, sortedDuplicates.join('\n'), 'utf-8');
}

// Define input and output file paths
const inputFilePath = path.join(__dirname, 'test_01.txt');
const outputFilePath = path.join(__dirname, 'sample_results.txt');

// Process the file
processFile(inputFilePath, outputFilePath);

console.log(`Duplicate integers have been written to ${outputFilePath}`);

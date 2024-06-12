### Task Description: 
> Using a programming language you want, Write a program that reads a list of integers from input file . Generate an output  file with a list of duplicate integers present in the input file.

#### Instructions
##### Download the sample data in this https://alueducation.instructure.com/courses/1465/files/175515?wrap=1
##### Read a file that has one integer on each line. The integer can be positive or negative.
5

14

5

-9

62

-1

-9

-9

+ For each input file in the sample data, you need to output a result file that contains a list of the Duplicate integers in this file. For example, in the sample data above, your result should be in the sample_results.txt file
+ The integers in the result file must be sorted in increasing order.
##### There must be one line in the result file for each Duplicate integer
For example, if the input is as shown in the bullet point above, the result must be:
-9

5

+ A few sample input and result files are given in the Sample data file for test purposes, and the files are in the link above.

##### Your code must also handle the following variations in the input file:

+ Integers in each line can have a white space before or after. A whitespace is limited to one or more tabs and space characters.
+ If there are any lines with no inputs or white spaces, those lines must be See example input files.
+ If there are any lines with two integers separated by white space, those lines must be skipped.
+ If any lines contain a non-integer input, those lines must be seen as an example input file.
Non-integer input includes alphabets, punctuation marks, non-numeric values, and floating point numbers.
#### Note:
+ The integers in the input file will range from -1023 to 1023.
+ You are not allowed to use built-in Libraries to implement this work; you are expected to implement your custom function to tackle the problem.
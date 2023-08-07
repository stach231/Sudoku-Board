# How to run

<ul>
<li>Enter the system terminal.</li>
<li>Using the cd command, enter the address of the folder where the repository should be located.</li>
<li>Go back to GitHub, press the "Code" button and copy the address shown in the newly opened panel.</li>
<li>Type "git clone 'copied link'" in the terminal and press enter.</li>
<li>Type "cd Sudoku-Helper".</li>
<li>Type "npm install" and then "npm run dev".</li>
<li>Copy the visible link starting with "http://localhost" and paste it into your browser.</li>
</ul>

# About

Have you ever tried to fill the Sudoku board with numbers from scratch?</br> If you have, you can probably admit that it's not an easy task, especially if you don't know the algorithm how to do this.

In response to your problem, Sudoku Helper comes to the rescue.

Sudoku Helper can also help you solve the Sudoku puzzles.

# Rules

The rules for filling the Sudoku board in Sudoku Helper are standard.</br>There is a board cosisting of 3x3 "macro-squares" which are the 3x3 board of "squares".

There can only be one number from 1 to 9 in each column, row and "macro-square".

# How to fill board?

When the page loads you will see the blank board.

<img src="src/img/readme_images/sudoku1-board.png"/>

## Panel

When you click on one of the squares, you will see the panel that will help you fill in the board.

At the top of the panel the Id of the square.</br>This Id is the number between 1 and 81.</br> It is calculated according to the formula:
<br/><br/>
Id = row_id\*9 + column_id
<br/><br/>
<b>Row_id and column_id are counted from 0.</b>
<br/><br/>
Below the Id of the square are the number of row, column and "macro-square" counted from 1 and below these that is the main part of this panel - "Priorities".
<br/><br/>
<img src="src/img/readme_images/sudoku2-panel.png">

## Priorities

Priorities are indicators of how many squares in column or row or "macro-square" number can be placed.</br> The highest priority is 1.
This means that for example that the 4 number <b>MUST BE</b> in this square, not other numbers, otherwise there will be no way to fill the Sudoku board correctly.

The user should input a number with the highest priority.

The high priority of entering some number is manifesting on the board by the blue color.</br>
The higher the priority is, the more intense the blue in the square will be.
</br></br>
<img src="src/img/readme_images/sudoku3-priorities.png"/>

# Enjoy!!!

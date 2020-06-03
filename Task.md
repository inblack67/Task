Steps to perform in this assignment :
1. Parse the JSON file
2. Go inside 'Body > Recommendations' 
3. Print name of Restaurant 
4. Go inside 'Body > Recommendations' 
5. Go inside menu 
6.  Loop for each menu (there can be multiple menus)
7.  Check whether type=sectionheader. If it is - go inside its 'children
8. Check whether type=item. If it is, check whether selected=1. If both are true, print the name of item, and go inside its children.
9. Check whether selected=1 (no need to pay attention to the 'type' now that we are inside children of 'item'). If selected was 1 then print the name of child, and go further deep inside the children
 Repeat the last step infinitely - until we have reached the deepest child

The output should look like this :
---------------------------------------------
Restaurant1
--> Item1
-----> Child1
----------> Child1.1
----------> Child1.2
------> Child2
------> Child3
----------> Child3.1

Take note of length of arrows in each line above. Your output should also contain these arrows to depict the indentation of each child.
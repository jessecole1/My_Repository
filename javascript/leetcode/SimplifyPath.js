// Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

// The canonical path should have the following format:

// The path starts with a single slash '/'.
// Any two directories are separated by a single slash '/'.
// The path does not end with a trailing '/'.
// The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')

const simplifyPath = function(path) {
    // Declare stack array
    let stack = [];
    // Iterate through path string
    for (let i = 0; i < path.length; i++) {
        // console.log(i);
        console.log("stack: " + stack[stack.length-1] + " " + stack[stack.length-2]);
        
        // Set a variable equal to what we push to stack 
        let temp = "";
        
        if (path[i] === ".") {
            temp += path[i];
            stack.push(temp);
            temp = "";
        }
        
        if (stack[stack.length-1] === "." && stack[stack.length-2] === ".") {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
        }
        if (path[i] === "/") {
            if (stack[stack.length-1] === "/") {
                continue;
            } else {
                stack.push("/");
            }
        }
        // If path[i] equals a letter, loop through and add to stack each letter until not a letter
        if (parseInt(path[i].charCodeAt(0)) >= 97 && parseInt(path[i].charCodeAt(0)) <= 122) {
            let count = 0;
            for (let j = i; j < path.length; j++) {
                if (j === path.length - 1) {
                    if (path[j].charCodeAt(0) >= 97 && parseInt(path[i].charCodeAt(0)) <= 122) {
                        temp += path[j];
                    }
                    stack.push(temp);
                    temp = "";
                    count = 0;
                    return stack;
                }
                if (path[j].charCodeAt(0) >= 97 && parseInt(path[i].charCodeAt(0)) <= 122) {
                    temp += path[j];
                    count++;
                }
                else {
                    stack.push(temp);
                    temp = "";
                    i += count - 1;
                    count = 0;
                    break;
                }
            }
        }
    }
    return stack;
}

console.log(simplifyPath("/home/abc/../your"));
           //             0123456789
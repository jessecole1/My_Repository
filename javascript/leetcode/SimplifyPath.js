// Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

// The canonical path should have the following format:

// The path starts with a single slash '/'.
// Any two directories are separated by a single slash '/'.
// The path does not end with a trailing '/'.
// The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')

const simplifyPath = function(path) {
    let firstStack = [];
    for (let i = 0; i < path.length; i++) {
        firstStack.push(path[i]);
    }

    let stack = [];
    j=0;
    let valid = false;
    while (j <= firstStack.length-1) {
        stack.push(firstStack[j]);
        console.log("after");
        console.log(stack);
        let z = stack[stack.length-1].charCodeAt(0);

        if (z >= 97 && z <= 122) {
            valid = false;
            let temp = "";
            let count = 0;
            stack.pop();
            for (let i = j; i <= firstStack.length-1; i++) {
                if (firstStack[i].charCodeAt(0) >= 97 && firstStack[i].charCodeAt(0) <= 122) {
                    temp += firstStack[i];
                    count++;
                } else {
                    stack.push(temp);
                    temp = "";
                    break;
                }
            }
            j += count -1;
        } 

        if (stack[stack.length-1] === "/") {
            // console.log(j);
            valid = false;
            if (stack[stack.length-2] === "/") {
                stack.pop();
            }
        }
        

        if (stack[stack.length-1] === "." && valid === false) {
            stack.pop();
            valid = true;
        }

        if (stack[stack.length-1] === "." && valid === true) {
            stack.pop();
            stack.pop();
            stack.pop();
            valid = false;
        }
        console.log("before")
        console.log(stack);
        j++;
        }
    let finalString = "";
    if (stack[stack.length-1] === "/" && stack.length > 1) {
        stack.pop();
    } 
    if (stack.length === 0) {
        stack.push("/");
    }
    for (let i = 0; i < stack.length; i++) {
        finalString += stack[i];
    }
    return finalString;
}
        


console.log(simplifyPath("/.."));
//                        012345678912
                    //    /a/
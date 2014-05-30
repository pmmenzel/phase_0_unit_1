## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  

###add
-This command allows you to add a file(s) to the staging area (or index).  Basically, it brings documents to the attention of Git.

###branch
-This command allows you to list, create or view branches in your local repository and tells your the current branch you are in.  Add a branch with git branch <branchname>; delete a file with git branch -d <branchname>.  

###checkout
This command allows you to switch to a new branch in your repository without having to use the change "cd" command.  Mostly a navigation tool/command.  You can also use it to create a new branch and navigate there immediately ("git checkout -b <branchname>

###clone
-This command allows you to copy a remote repository to your local repository.  If you want to collaborate or use the code for your own purposes, this is what way to go. 

###commit
-This command records the snapshot of what you had staged using "add."  Your name and email address are included in every commit that is made.  You typically want to have add a message to your commit with "-m" to provide a little description of what this commit entailed. 

###fetch
-This command will allow you to receive all new branches and changes to data from a remote repository.  once you fetch them though, you will have to fun a git merge to merge all the changes.  

###log
-This command shows you a list of all the changes that have been made that lead you to the current version of the branch you are in now.  This is a great way to see the progress of the work and see who made what changes and what they changed.

###merge
This command merges any branch content you identify into your current branch (usually the master).  You can run "git diff" to identify any conflicts that arise.   

###pull
-This command is very similar to "fetch" in that it will allow you receive all the new branches and changes to data from the remote repository.  The main difference is that this function will pull those changes and merge them all at once with your local repository.  

###push
-This command takes any committed changes/updates and pushes them to the remote repository.  

###reset
-This command will unstage files.  In other words, it will undo the last commit and put the files back on the stage area.  

###rm
-This command allows you to remove (delete) files from the staging area.


## Release 4: Git Workflow

- Push files to a remote repository
	git status - see what's changed/added/deleted
	git add - list all the files you'd like to track and add to the staging area.
	git commit -m "[message]" - once you've added all the changes to the staging area, take a snapshot of the the changes using this command.  Be sure to add a message so you can keep track of what you did during this commit.
	git push - push all your changes to your remote repository.
- Fetch changes
	git fetch upstream - this will grab the upstream's remote branch
	git remove -va - this will list all local and remote branches

- Commit locally
	git checkout [local_repository] - this navigates you to the repository that you'd like
	git status - see what's been changed/added/deleted
	git add  - add any new untracked and tracked documents to the staging area.
	git commit -m "" - takes a snapshot of the current repository



## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)
	I didn't run into any errors. 

## Release 6: Reflection
What parts of your strategy worked? What problems did you face?

I made a decision to use the command line from the get-go, so that was very helpful in working through this particular lesson.  Like most people, I'm still trying to get my head wrapped around the nuances of using the command line to utilize github.  But, also like most people, I'm still at times having trouble remember the proper steps and procedures for correctly syncing/working with repositories.  I am even moreso struggling with correctly identifying errors and fixing them.  

What questions did you have while coding? What resources did you find to help you answer them?

Since I've already been using the command line, I really tried to learn some of the shortcuts in add/committing changes, etc.  But more importantly, I did my best to understand the pros and cons of using a shortcut versus taking all the steps to do the same thing.  As an example, I spent some time research the differences between "git add" versus "git commit -am"

What concepts are you having trouble with, or did you just figure something out? If so, what?

I didn't know, before this lesson, that you can "checkout" to a new repository/branch which was a big aha moment.  Navigating tricks are always going to help my sanity.  I still need to dive deeper into troubleshooting errors though, not sure I fully understand everything. 

Did you learn any new skills or tricks?

Like I said above, the checkout function is awesome for quickly navigating. 

How confident are you with each of the Learning Competencies?

I've pretty confident with the learning competencies but there is always room to grow. 

Which parts of the challenge did you enjoy?

I still find it so really cool all the things you can do with the command line.  I realized through some additional research, that this is the primary way programmer used to interact with the computer.  Its like showing me new horizons and I have a new perspective and respect for the old school programmers.   

Which parts of the challenge did you find tedious?

I found this to be very helpful and nothing too tedious.

##Additional Resources
This website was very useful for git references.  Bookmark it
http://gitref.org/basic/

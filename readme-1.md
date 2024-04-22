
1. Version Control System
 - Version Control (source control) is tracking and managing software code changes.
ex: Git,Apache subversion, Piper

2. Git vcs
    -git is a vcs
    -we will use git using git cli
    -basic git command in the pdf
    //git config --global user.name "[name]" 
      (Git can track the changes and who has done the changes , this will tell who has writtern that particular line of code)
    -similarly your user name

3. //Git Init 
    - To initialize a git repp
    - hidden .git folder is created which will track all the changes
    - //git add filename 
    starts to track the file
    // git diff
    - tells what changes has been done
    //  git add . 
    - adds all the files in current directory to track changes
    //  git rm filename

    to remove file from version control system

4. Commit
     commits are changes in the code (which we finalise to deploy)
     //git commit -m "my first commit"
     this will change the code in git repo

     // git log
     this will show the history of all commits

    when we change anything in the file
     first we do 
     //git add .
     // git commit -m "message with it"

     // git log --oneline
     this will shorten the line of logs

     // git show commitId
     this will tell what chages has been done due to this commit

     //git blame filename
     this will show line by line who has changed (commited ) by which user

     //git status 

     it will tell whether somefiles have been changed or not after previous commit

5. Staging area
     - to put a file in staging area we have to first run the command git add . or git add file name


     if we want to commit something it should be first on the staging area .
     for example if we change a file and run the git commit command nothing will happen as there is nothing on the staging area  after running command git add . it will now add the code to staging area

     // git commit -m
     will only commit the code that are in staging area

     !!! this means that the experimented code should not be send to staging area i.e. dont put run the git add command on the files which you dont want to add the deployment file 

6. Reverting back
    sometiime when we add the code the system collapses and thus code fat jata hai , so to revert back the changes this is used .
    git internally uses linked list for all the commits (if we write clean code we wil able to easily revert back)

    -the head pointer is always pointed on the latest commit
  a. first way
    - to revert the change change the head pointer to previous commit
    // git reset hard commitId
    (for commitId jus run the command git log --oneline)

    b. second way
    - now if we want in between commit to be deleted (we cant do that by the first way as it will delete all the codes after the head pointer)

    // git revert commitId
     to revert particular commit
  
7. Single source of truth
  - In a big team of coders (many developers and many line of codes can be coflicted )
 - so there is a remote server on which we push the code and if some other person write a code we pull it  on the local machine.
  
  - This central server is github/gitlab/bitbucket

  8. On the github page create a  neew github repo (public/private based on your choice)
  now two ways to publish our code are
   a.for a completely new repo
      echo "# github-crashcourse" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Bhogeshwarj/github-crashcourse.git
git push -u origin main
  b.to push existing repo
   git remote add origin git@github.com:Bhogeshwarj/github-crashcourse.git
git branch -M main
git push -u origin main

-----coming back to our code----
// git remote add origin repolink
for example: // git remote add origin git@github.com:Bhogeshwarj/github-crashcourse.git

// git remote -v 
//git branch -M main
// git push -u origin main (pushes our code to main branch of the code)

-iPublic Key:

The public key is shared openly and is used to encrypt data. It is intended to be shared widely.
In SSH, the public key is often stored in a file with a .pub extension, like id_rsa.pub.
The public key is used by others to verify the signature created by the corresponding private key.
Private Key:

The private key is kept secret and should never be shared. It is used to decrypt data that was encrypted with the corresponding public key.
In SSH, the private key is usually stored in a file without any extension, like id_rsa.
The private key should be kept secure on your local machine.
SSH Key Pair:

When you generate an SSH key pair, you create both a public and a private key. These keys are mathematically related, and data encrypted with one key can only be decrypted with the other.
The public key is shared with others (like GitHub), and the private key is kept secret on your machine.
Setting up SSH Key on Local Machine:

You generate an SSH key pair using a tool like ssh-keygen. This creates a public key file (id_rsa.pub) and a private key file (id_rsa).
The private key is stored on your machine in a secure location (usually in ~/.ssh/), and the public key is shared with services like GitHub.
Using SSH Keys for Authentication:

When you connect to a service (e.g., GitHub) using SSH, your local machine signs a piece of data with your private key.
The service (GitHub) checks the signature using your public key. If the signature is valid, you are authenticated.
GitHub SSH Key Setup:

You add your SSH public key to your GitHub account.
This allows GitHub to recognize your machine and authenticate you without a username or password.
In summary, SSH keys consist of a public and a private key. The public key is shared with services, while the private key is kept secret on your local machine. When properly set up, SSH keys provide a secure and convenient way to authenticate with services like GitHub without entering passwords. If you encounter issues with pushing, make sure your public key is correctly added to your GitHub account and that your local SSH agent has the private key loaded.
 : github profilie / setting /SSh and gpg key / new ssh key

 cd ~/.ssh
.ssh> ls | grep id
cat .pub file


// SSH KEY SETUP
SSH Key Setup:
If you encounter issues with pushing and are prompted for authentication, it's a good idea to set up SSH keys. Follow these steps:

a. Check for Existing SSH Keys:


cd ~/.ssh
ls | grep id
This command lists any existing SSH key files. Common filenames are id_rsa for private keys and id_rsa.pub for public keys.

b. Generate SSH Key Pair (if needed):
If no keys exist, generate a new SSH key pair:


ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
Follow the prompts to generate the key pair. Make sure to provide a strong passphrase for added security.

c. Add SSH Key to SSH Agent:


eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
d. Add SSH Key to GitHub:

Copy the SSH public key to the clipboard:

cat ~/.ssh/id_rsa.pub
Go to your GitHub profile -> Settings -> SSH and GPG keys -> New SSH key.
Paste the copied key into the "Key" field and add a relevant title.
e. Test the Connection:


ssh -T git@github.com
This tests whether the SSH key is properly set up and connected to your GitHub account.

Now, your SSH key should be set up, and you should be able to push changes to the main branch without entering your GitHub credentials each time.

9. Git hub branching
  as there are many developers in an organisatioin it is not good that everyone commits there each line of code directly on the main brainch .
  So a new branch is provided to each developer and we write code on that and then merge all that branched code and push to the origin and also easily can revert each individual developers

to check currently you are on which branch
  // git branch
  To create a new branch on current head commit(latest commit)
 // git branch branch-name
 to move to the different branch(or new branch)
 // git checkout branch-name

 now when we add and commmit  it is not added to the main branch but to the new branch that is created currently


  TO push this code on the github(remote server),we need create this new branch on the git hub

  //git push --set-upstream origin branchname

 to add the code of this branch to the main branch we first need to move to the main branch
// git checkout main
// git branch(check whether switched or not)

// git merge origin/branchname
 
// git branch feature-b
 1097  git branch
 1098  git checkout feature-b
 1099  git add .
 1100  git commit -m "new feature added"
 1101  git add .
 1102  git commit -m "new feature added2"
 1103  git push --set-upstream origin feature-b
 
 // here we create a  new branch
 when we create a new branch(git branch feature-b)
 then we write code on that branc and then finally push the code to that branch on the server using ( git push --set-upstream origin feature-b)
 now this will create a branch on the server

 // now this push request is send on the server
 and when it is approved 
 then others can pull it  directly
 (here we dont manually using cli add the feature branch to the main but by using the git hub website)

 // git checkout 
 // git branch
 //  git pull


 Nomen culture of branch
  git branch "feat/add-chat-support"
  git branch "bug/login-not-working"

//git branch "feat/feat-a" (creates new branch)
//git checkout "feat/feat-a" (enters into that branch)
//git checkout -b "feat/feat-a" (combines both)

merging in github
 a. git merge
 b.rebase(rarely)

 in merge we combine all the commits of branches and then merge with current head main branch  but in rebase we transfer all the commits to the current head and then merge it here we can track all the steps

Stashing
-You are a developer and If on main branch some changes are there and you have some unfinished work on the local machine 

- now you want  to pull , but you will not be able to pull it as first you have to add and commit your changes first

-so now 
//git stash 
(it will make a temporary directory and save changes there)
//git stash apply
(it will apply the changes in our code)



# Software Studio 2022 Spring Midterm Project

### Scoring

| **Basic components**                             | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Membership Mechanism                             | 15%       | Y         |
| Firebase page                                    | 5%        | Y         |
| Database read/write                              | 15%       | Y         |
| RWD                                              | 15%       | Y         |
| Chatroom                                         | 20%       | Y         |

| **Advanced tools**                               | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Using React                                      | 10%       | Y         |
| Third-Party Sign In                              | 1%        | Y         |
| Notification                                     | 5%        | Y         |
| CSS Animation                                    | 2%        | Y         |
| Security                                         | 2%        | Y         |

| **Other useful functions**                         | **Score** | **Check** |
| :----------------------------------------------- | :-------: | :-------: |
| Name of functions                                  | 1~10%     | N         |


---

### How to use 

    Describe how to use your web and maybe insert images or gifs to help you explain.
![image](https://user-images.githubusercontent.com/39045469/164910233-7643723f-864c-4d0c-b5f6-449644497a84.png)

First sign up with email and password, or log in with Google. If the sign-up is successful, you need to log in manually again. If first sign up with gmail, then log in with Google with the same email account, you'll have to log in with Google in the future.
    
On top left you can enter other users' email and hit enter to start a conversation with them. On the left is the sidebar of all conversations. Click on any of them to change the chatbox.
On the right is the chatbox, type in message in the input bar and hit enter to send the message.


### Function description

    Describe your bonus function and how to use it.
Membership mechanism is described above and the app is hosted on firebase.

Authenticated database read/write is implemented in the chat history. Chat histories are stored in database in certain paths that are related to user emails. Each user has a unique user email and is made sure that way when signing up, so the paths won't conflict. Each conversation will record participants' emails so that the database rules make sure only those participants can access it.

![image](https://user-images.githubusercontent.com/39045469/164910750-33a85957-f46b-46fb-b8ce-1d365b89e7f9.png)
![image](https://user-images.githubusercontent.com/39045469/164910787-07f366eb-a2fd-4524-8821-e9f2cfe581af.png)

RWD feature can be seen in the above images. It is implemented by css that changes chatbox width in accordance with viewport size.
Chatroom feature can also be seen in the image.

![image](https://user-images.githubusercontent.com/39045469/164911305-c161b292-1094-421f-8b5f-8d0639226a1a.png)
![image](https://user-images.githubusercontent.com/39045469/164911353-5ab75df5-9233-4072-88a5-f886af4a5c28.png)
If someone starts a new conversation with you, the browser(in the example, Chrome) will notify you if you accept notification.



### Firebase page link

    Your web page URL

### Others (Optional)

    Anything you want to say to TAs.

<style>
table th{
    width: 100%;
}
</style>

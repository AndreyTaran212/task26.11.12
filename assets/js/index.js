'use strict'

const userList = document.getElementById('usersList');



const user={
    name: "Mathew Alex",
    img: './assets/images/icons/user_icon.png',
    information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos est expedita quasi. Ad animiassumenda dicta earum esse laudantium maxime odio, perspiciatis quam, quasi rerum tempora. Accusantium",
};
function createUserListItem(user) {

    const userListItem = document.createElement('li');
    userListItem.append( createUserCardContainer(user) );

    return userListItem;
}

function createUserCardContainer(user) {

    const userCardWrapper = document.createElement('div');
    userCardWrapper.classList.add('userCardWrapper', 'flexContainer', 'flexDirectionColumn', 'alignItemCenter');
    userCardWrapper.append(createUserImageContainer(user) );
    userCardWrapper.append(createUserNameSecondName(user) );
    userCardWrapper.append(createUserInfo(user) );

    return userCardWrapper;

}

function createUserImageContainer(user) {

    const createUserPictureContainer = document.createElement('div');
    createUserPictureContainer.classList.add('userPictureContainer');
    createUserPictureContainer.append(addUserImage(user) );

    return createUserPictureContainer;

}

function addUserImage(user) {

    const  userPictureElem = document.createElement('img');
    userPictureElem.setAttribute('src', user.img ? user.img : "./assets/images/icons/user_icon.png");
    userPictureElem.setAttribute('alt', 'user picture');

    return userPictureElem;

}

function createUserNameSecondName(user) {

    const createUserNameSecondName = document.createElement('h3');
    createUserNameSecondName.classList.add('userFullName', 'userFullNameMargin');
    createUserNameSecondName.innerText = user.name; // `$(user.name) $(user.surname)`
    return createUserNameSecondName;

}

function createUserInfo(user) {

    const createUserInfo = document.createElement('p');
    createUserInfo.classList.add('userDescription');
    createUserInfo.innerText = user.information;

    return createUserInfo;

}



userList.append(createUserListItem(user) );



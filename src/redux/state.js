import Settings from "../components/Main/Settings/Settings";
import News from "../components/Main/News/News";
import React from "react";
import m from "../components/Menu/Menu.module.css";
import {NavLink} from "react-router-dom";
import {renderEnterTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: '"Why you here?', likes: '-1'},
            {id: 1, message: 'Are you here?', likes: '-1'},
            {id: 1, message: 'U kudding me? i kill u, fucking cat1', likes: '-1'},
        ],
        newPostText: '',
    },
    setting: <Settings settings="pizdec react"/>,

    news: (<News news={'sasi chlen'}/>),
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Old dog', url: 'https://sniffandwag.com/wp-content/uploads/2019/07/funniest-dogs-and-cats.jpg'},
            {id: 2, name: 'Funny dog', url: 'https://i.pinimg.com/originals/c4/90/75/c4907577a372c21c3ea70cad4b59eb07.jpg'},
            {id: 3, name: 'My husband', url: 'https://i.insider.com/5da9e261045a31389043bc43?width=1100&format=jpeg&auto=webp'},
            {id: 4, name: 'My.. amm', url: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/01/funny-dog-teeth-toofers-3-5e255a95cd31e__700.jpg'},
            {id: 5, name: 'FBad ass', url: 'https://allabout-pets.com/wp-content/uploads/2019/06/funny-dog-names.jpg'},
            {id: 6, name: 'Old dog', url: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/06/funny-dog-onesies2.jpg'},
        ],

        messages: [
            {id: 1, message: 'good luck fuking bad ass'},
            {id: 2, message: 'FUkerrad2122'},
            {id: 3, message: 'u see this?'},
        ],
    },
    menu: {
        profile: <NavLink to='/profile' activeClassName={m.active}>Profile</NavLink>,
        messages: <NavLink to='/messages' activeClassName={m.active}>Messages</NavLink>,
        news:  <NavLink to='/news' activeClassName={m.active}>News</NavLink>,
        music: <NavLink to='/music' activeClassName={m.active}>Music</NavLink>,
        settings:  <NavLink to='/settings' activeClassName={m.active}>Settings</NavLink>,

    },
    friends: {
        friendsName: [
        {id: 1, name: 'Super', url: 'https://www.nationalgeographic.com/content/dam/animals/2018/09/comedy-wildlife-awards-photos/comedy-wildlife-awards-squirel-stop.ngsversion.1537203605960.adapt.1900.1.jpg'},
        {id: 2, name: "Kolia", url: 'https://pbs.twimg.com/profile_images/1058201793753157633/SXcF2ilG_400x400.jpg'},
        {id: 3, name: "Pidor", url: 'https://www.animaladdicts.net/wp-content/uploads/2016/08/Animal-world-is-by-far-the-funniest-world-Funny-animal-compilation-265x180.jpg'},
    ] },
};

export let newPost = () => {

    let post = {
        id: 4,
        message: state.profilePage.newPostText,
        likes: 2,
    };
    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    renderEnterTree(state);
};

export let addNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderEnterTree(state);
};


export default state;
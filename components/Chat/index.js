import React, { useContext, Component } from 'react';
import { Layout } from 'antd';
import {nameInputStyles} from './styles'
import algoliasearch from 'algoliasearch/lite';
import UserContext from '../UserContext';
import { db } from '../../services/firebase';

const Chat = (userState) => {
  const { user }= userState;
  var chats= [];
  var content= '';
  var readError= null;
  var writeError= null;
  
  readError= null;
  try {
    db.ref("chats").on("value", snapshot => {
      let chats = [];
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
    });
  } catch (error) {
    readError= error.message;
  }
  return (
    <div>
      <div className="chats">
        {chats.map(chat => {
          return <p key={chat.timestamp}>{chat.content}</p>
        })}
      </div>
      <form >
        <input value={content}></input>
        <button type="submit">Send</button>
      </form>
      <div>
        Login in as: <strong>{user.credential}</strong>
      </div>
    </div>
  );
}
export default Chat;